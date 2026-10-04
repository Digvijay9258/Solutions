import type { Metadata } from "next";
import ContactPageContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact GURUVANTA ITs SOLUTION PVT LTD for a free consultation. Request a quote for website development, CRM, ERP, or e-commerce solutions.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
