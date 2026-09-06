import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Martech Insiders",
  description:
    "Get in touch with Martech Insiders — whether you're weighing a martech decision or telling a vendor story, we'd like to hear from you.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
