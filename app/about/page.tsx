import type { Metadata } from "next";
import AboutPageContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GURUVANTA ITs SOLUTION PVT LTD — our mission, vision, values, and client-first development philosophy.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
