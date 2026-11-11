import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Martech Insiders",
  description:
    "Get in touch with Martech Insiders — whether you're weighing a martech decision or telling a vendor story, we'd like to hear from you.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
