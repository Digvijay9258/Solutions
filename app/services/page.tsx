import type { Metadata } from "next";
import ServicesPageContent from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our IT services — Website Development, Vibe-Coded Websites, CRM, ERP, E-Commerce, SEO-Friendly Websites, Custom Web Applications, and Website Maintenance.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
