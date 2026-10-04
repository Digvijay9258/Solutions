"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { pricingPlans } from "@/lib/constants";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-bg-secondary" id="pricing">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-main relative z-10">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Clear starting prices for common project types. Final pricing
            depends on project scope and requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary-500/20 to-primary-900/10 border-2 border-primary-500/40 shadow-glow"
                  : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Popular Choice
                </div>
              )}

              <h3 className="font-heading font-semibold text-text-primary text-xl mb-3">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
                  {plan.price}
                </span>
                <span className="text-base text-text-muted">{plan.suffix}</span>
              </div>
              <p className="text-sm text-text-secondary mb-7 leading-relaxed min-h-[44px]">
                {plan.description}
              </p>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-0.5">
                    <Check className="w-4 h-4 text-accent-400 mt-1 shrink-0" />
                    <span className="text-sm text-text-secondary leading-normal">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full text-center py-3.5 ${
                  plan.highlighted ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-text-muted mt-8 max-w-xl mx-auto"
        >
          All prices are starting prices and may vary based on specific project
          requirements, complexity, and scope. GST applicable as per government
          regulations.
        </motion.p>
      </div>
    </section>
  );
}
