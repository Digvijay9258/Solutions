"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Puzzle,
  Cpu,
  Smartphone,
  Search,
  TrendingUp,
  MessageSquare,
  Headphones,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Puzzle,
  Cpu,
  Smartphone,
  Search,
  TrendingUp,
  MessageSquare,
  Headphones,
  Sparkles,
};

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative" id="why-choose-us">
      <div className="container-main">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Why Businesses <span className="gradient-text">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            We combine modern technology with a client-first approach to deliver
            solutions that make a real difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="glass-card p-7 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:border-primary-400/40 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary text-lg mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-loose tracking-wide">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
