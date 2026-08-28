"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "site-consent-v1";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
export const COOKIE_REOPEN_EVENT = "mti-open-cookie-prefs";
export const COOKIE_CHANGED_EVENT = "mti-consent-changed";

type ConsentValue = "accepted" | "rejected";

function readConsentCookie(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)site-consent-v1=(accepted|rejected)/);
  return match ? (match[1] as ConsentValue) : null;
}

function writeConsentCookie(value: ConsentValue) {
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * Pushes a Consent Mode signal to dataLayer. Works regardless of whether GTM
 * or gtag.js is the thing reading it — GTM's built-in consent checks (set
 * per-tag in the container, e.g. on the GA4 Configuration tag) read these
 * same dataLayer entries. That per-tag "Require additional consent" setting
 * lives in the GTM UI itself and isn't something this codebase controls —
 * worth confirming it's switched on for the analytics tags in GTM-KV2KL3XD.
 */
function pushConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(["consent", "update", { analytics_storage: state, ad_storage: state }]);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // If the visitor already made a choice on a previous visit, the banner
    // correctly stays hidden — but we still need to re-announce that choice
    // to the dataLayer on every fresh page load. The default consent state
    // (set beforeInteractive, before this component ever mounts) is always
    // "denied", so without this re-push, returning visitors silently fall
    // back to denied on every single session even after having accepted.
    const existing = readConsentCookie();
    if (existing) {
      pushConsent(existing === "accepted" ? "granted" : "denied");
    } else {
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_REOPEN_EVENT, reopen);
  }, []);

  function handleAccept() {
    writeConsentCookie("accepted");
    pushConsent("granted");
    setVisible(false);
    window.dispatchEvent(new Event(COOKIE_CHANGED_EVENT));
  }

  function handleReject() {
    writeConsentCookie("rejected");
    pushConsent("denied");
    setVisible(false);
    window.dispatchEvent(new Event(COOKIE_CHANGED_EVENT));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-paper px-6 py-5 font-manrope text-void">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        <p className="max-w-[640px] text-[0.95rem] text-muted">
          We use cookies for site analytics. Reject and we&apos;ll skip them — you can change your mind any
          time from the footer. See our{" "}
          <a href="/privacy-policy" className="text-cobalt hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="border-[1.5px] border-void px-[18px] py-[11px] font-mono text-[0.8rem] tracking-wide transition-colors hover:border-accent hover:bg-accent hover:text-paper"
          >
            REJECT
          </button>
          <button
            onClick={handleAccept}
            className="bg-void px-[18px] py-[11px] font-mono text-[0.8rem] tracking-wide text-paper transition-colors hover:bg-accent"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasConsented(): boolean {
  return readConsentCookie() === "accepted";
}
