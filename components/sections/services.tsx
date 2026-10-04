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

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative" id="services">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Solutions That <span className="gradient-text">Drive Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            From websites to enterprise solutions, we build digital products
            that help businesses succeed in the modern world.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="glass-card block p-7 h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 leading-loose tracking-wide">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary-400 font-medium group-hover:gap-2.5 transition-all tracking-wide">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
