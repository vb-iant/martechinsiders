"use client";

// Homepage contact form (Web3Forms). Split out of app/page.tsx so the
// homepage itself can be a server component — that lets it read the latest
// blog posts off the filesystem for the Insider Insights section.

import { useState, type FormEvent } from "react";

export function ContactForm() {
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
  );
}
