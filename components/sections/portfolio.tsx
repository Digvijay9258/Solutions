"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Tag } from "lucide-react";

// Demo portfolio data — clearly marked as concept/demo projects
const portfolioItems = [
  {
    title: "TechVista Business Platform",
    category: "Website",
    description:
      "A modern business website with lead capture, analytics dashboard, and content management system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    type: "Concept Project",
  },
  {
    title: "ShopWave E-Commerce",
    category: "E-Commerce",
    description:
      "Full-featured e-commerce platform with product catalog, cart, checkout, and order management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    type: "Demo Project",
  },
  {
    title: "LeadFlow CRM",
    category: "CRM",
    description:
      "Custom CRM system with lead pipeline, contact management, task automation, and reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    type: "Concept Project",
  },
  {
    title: "InventoryPro ERP",
    category: "ERP",
    description:
      "Business management platform with inventory tracking, HR module, and financial reporting.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    type: "Concept Project",
  },
  {
    title: "PortfolioLab",
    category: "Web App",
    description:
      "Personal portfolio builder with customizable templates, blog integration, and analytics.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    type: "Demo Project",
  },
  {
    title: "ServiceHub",
    category: "Website",
    description:
      "Service-based business website with booking system, team showcase, and testimonial management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "Concept Project",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative" id="portfolio">
      <div className="container-main">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            A selection of concept and demo projects showcasing our
            development capabilities and design approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-950 via-bg-tertiary to-accent-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-white/10">
                    {item.title.charAt(0)}
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-xs font-semibold text-primary-300">
                  {item.category}
                </div>
                {/* Type badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-semibold text-amber-300">
                  {item.type}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-text-primary text-xl mb-3 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-border flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-text-muted hover:text-text-primary hover:border-primary-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
