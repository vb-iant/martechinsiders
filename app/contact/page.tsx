"use client";

import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const TAG = "font-mono text-[0.82rem] tracking-wide text-accent inline-block mb-5";

function Eyebrow({ children }: { children: string }) {
  return <span className={TAG}>{children}</span>;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms honeypot: if this hidden field is filled in, it's a bot —
    // let their API silently swallow it rather than special-casing it here.
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="font-manrope bg-paper text-void text-lg leading-[1.7]">
      <SiteHeader />

      {/* INTRO */}
      <section className="mx-auto max-w-[1180px] px-8 pb-4 pt-16">
        <Eyebrow>[ get in touch ]</Eyebrow>
        <h1 className="mb-[18px] font-display text-[2.1rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.5rem]">
          Let&rsquo;s talk
        </h1>
        <p className="max-w-[64ch] text-[1.15rem] text-muted">
          Whether you&rsquo;re weighing a martech decision or telling a vendor story, we&rsquo;d like to
          hear from you.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mt-12 bg-accent text-paper">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 py-24 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[0.82rem] tracking-wide text-paper inline-block mb-5">
              [ contact details ]
            </span>
            <h2 className="mb-[18px] font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">
              Reach us directly
            </h2>
            <p className="mb-[26px] text-[1.1rem] text-paper/85">
              Prefer email or LinkedIn? Here&rsquo;s how to find us.
            </p>
            <div className="font-mono text-[0.9rem]">
              <div className="mb-[10px]">
                Email:{" "}
                <a href="mailto:hello@martechinsiders.com" className="font-semibold text-paper underline">
                  hello@martechinsiders.com
                </a>
              </div>
              <div>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/martechinsiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-paper underline"
                >
                  linkedin.com/company/martechinsiders
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="05ca13d7-6f81-4d42-87fe-59423d57482f" />
              <input type="hidden" name="subject" value="New enquiry — Martech Insiders" />
              <input type="hidden" name="from_name" value="Martech Insiders website" />
              <div className="mb-[22px]">
                <label htmlFor="name" className="mb-2 block font-mono text-[0.78rem] tracking-wide text-paper/75">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-[1.5px] border-void/15 bg-paper px-4 py-3.5 font-body text-base text-void focus:border-void focus:outline-hidden"
                />
              </div>
              <div className="mb-[22px]">
                <label htmlFor="email" className="mb-2 block font-mono text-[0.78rem] tracking-wide text-paper/75">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-[1.5px] border-void/15 bg-paper px-4 py-3.5 font-body text-base text-void focus:border-void focus:outline-hidden"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[0.78rem] tracking-wide text-paper/75"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y border-[1.5px] border-void/15 bg-paper px-4 py-3.5 font-body text-base text-void focus:border-void focus:outline-hidden"
                />
              </div>

              {/* Web3Forms' recognized honeypot field - bots fill it in, humans never see it */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-void px-7 py-4 font-mono text-[0.88rem] tracking-wide text-accent transition-colors hover:bg-paper hover:text-void disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="mt-4 text-[0.88rem] text-paper/75">
                Goes straight to our inbox — no CRM, no marketing lists.
              </p>
              {status === "success" && (
                <div className="mt-[18px] border-[1.5px] border-paper px-[18px] py-4 font-mono text-[0.92rem] text-paper">
                  Thanks — we&rsquo;ll be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mt-[18px] border-[1.5px] border-red-900 px-[18px] py-4 font-mono text-[0.92rem] text-red-900">
                  Something went wrong — please email us directly at hello@martechinsiders.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
