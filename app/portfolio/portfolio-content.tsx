"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/cta";

const categories = ["All", "Website", "E-Commerce", "CRM", "ERP", "Web App"];

const projects = [
  {
    title: "TechVista Business Platform",
    category: "Website",
    description:
      "A modern business website with lead capture, analytics dashboard, and content management system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    type: "Concept Project",
    caseStudy:
      "Designed to demonstrate how a professional business website can serve as a complete lead generation platform with integrated analytics.",
  },
  {
    title: "ShopWave E-Commerce",
    category: "E-Commerce",
    description:
      "Full-featured e-commerce platform with product catalog, cart, checkout, and order management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    type: "Demo Project",
    caseStudy:
      "Built as a demonstration of end-to-end e-commerce functionality including inventory management and payment processing.",
  },
  {
    title: "LeadFlow CRM",
    category: "CRM",
    description:
      "Custom CRM system with lead pipeline, contact management, task automation, and reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    type: "Concept Project",
    caseStudy:
      "Conceptualized as a lightweight CRM alternative for small businesses that need lead tracking without enterprise complexity.",
  },
  {
    title: "InventoryPro ERP",
    category: "ERP",
    description:
      "Business management platform with inventory tracking, HR module, and financial reporting.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    type: "Concept Project",
    caseStudy:
      "Designed to showcase how modular ERP architecture can be implemented for manufacturing and retail businesses.",
  },
  {
    title: "PortfolioLab",
    category: "Web App",
    description:
      "Personal portfolio builder with customizable templates, blog integration, and analytics.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    type: "Demo Project",
    caseStudy:
      "Created to demonstrate dynamic portfolio generation with customizable themes and built-in blogging.",
  },
  {
    title: "ServiceHub",
    category: "Website",
    description:
      "Service-based business website with booking system, team showcase, and testimonial management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "Concept Project",
    caseStudy:
      "Developed as a template concept for service-based businesses needing appointment scheduling and team profiles.",
  },
  {
    title: "QuickMenu",
    category: "Web App",
    description:
      "Digital menu and ordering system for restaurants with QR code integration and kitchen display.",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
    type: "Demo Project",
    caseStudy:
      "Built to showcase real-time order management with QR-based menu access for the food service industry.",
  },
  {
    title: "EduTrack LMS",
    category: "Web App",
    description:
      "Learning management system with course builder, student tracking, and certificate generation.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    type: "Concept Project",
    caseStudy:
      "Conceptualized for coaching institutes and online educators needing structured course delivery and student progress tracking.",
  },
];

export default function PortfolioPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full" />

        <div className="container-main relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance max-w-3xl mx-auto mb-8 tracking-wide"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6 leading-loose tracking-wide"
          >
            Concept and demo projects showcasing our development capabilities
            and design approach.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="text-sm text-amber-400/90 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 inline-block leading-relaxed tracking-wide"
          >
            Note: These are concept/demo projects created to showcase capabilities. No fake client names or testimonials.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section ref={gridRef} className="section-padding bg-bg-secondary">
        <div className="container-main">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-white/5 border border-surface-border text-text-secondary hover:border-primary-500/30 hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  layout
                  className="glass-card overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-950 via-bg-tertiary to-accent-900/20 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-white/10">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-xs font-semibold text-primary-300">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-semibold text-amber-300">
                      {project.type}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-heading font-semibold text-text-primary text-xl mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-xs text-text-muted mb-6 leading-relaxed italic border-l-2 border-primary-500/40 pl-3.5 py-2 bg-primary-500/[0.04] rounded-r-md">
                      {project.caseStudy}
                    </div>
                    <div className="mt-auto pt-4 border-t border-surface-border flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
