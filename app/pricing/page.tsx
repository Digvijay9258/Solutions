import type { Metadata } from "next";
import PricingPageContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website development, e-commerce, CRM, and ERP solutions. Starting from ₹5,999.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
