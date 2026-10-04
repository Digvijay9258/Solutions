import type { Metadata } from "next";
import PortfolioPageContent from "@/app/portfolio/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of concept and demo projects showcasing web development, e-commerce, CRM, and ERP capabilities.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
