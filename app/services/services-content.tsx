"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Sparkles,
  Users,
  Building2,
  ShoppingCart,
  Search,
  Code,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/constants";
import CTASection from "@/components/sections/cta";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Sparkles,
  Users,
  Building2,
  ShoppingCart,
  Search,
  Code,
  Wrench,
};

export default function ServicesPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance max-w-3xl mx-auto mb-8 tracking-wide"
          >
            End-to-End{" "}
            <span className="gradient-text">IT Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-loose tracking-wide"
          >
            From websites to enterprise platforms, we provide comprehensive
            technology solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="section-padding bg-bg-secondary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="glass-card block p-8 h-full group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading font-semibold text-xl text-text-primary mb-3 group-hover:text-primary-400 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2.5 mb-5">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-md bg-white/5 border border-surface-border text-xs text-text-muted hover:text-text-primary transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-primary-400 font-medium group-hover:gap-2 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
