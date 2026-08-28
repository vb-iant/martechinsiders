"use client";

import { COOKIE_REOPEN_EVENT } from "./CookieConsent";

export function CookiePreferencesLink() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event(COOKIE_REOPEN_EVENT))}
      className="text-accent hover:underline"
    >
      Cookie Preferences
    </button>
  );
}
