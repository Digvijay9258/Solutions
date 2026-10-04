"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { pricingPlans } from "@/lib/constants";
import FAQSection from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";

export default function PricingPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

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
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance max-w-3xl mx-auto mb-8 tracking-wide"
          >
            Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-loose tracking-wide"
          >
            Clear starting prices for common project types. Every project is
            unique, so final pricing is based on your specific requirements.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={cardsRef} className="section-padding bg-bg-secondary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary-500/20 to-primary-900/10 border-2 border-primary-500/40 shadow-glow"
                    : "glass-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Most Popular
                  </div>
                )}

                <h3 className="font-heading font-semibold text-text-primary text-xl mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-heading font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-lg text-text-muted">{plan.suffix}</span>
                </div>
                <p className="text-sm text-text-secondary mb-7 leading-relaxed min-h-[44px]">
                  {plan.description}
                </p>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 py-0.5">
                      <Check className="w-4 h-4 text-accent-400 mt-1 shrink-0" />
                      <span className="text-sm text-text-secondary leading-normal">
                        {feature}
                      </span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto mt-12 glass-card p-6 text-center"
          >
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">Note:</strong> All prices
              are starting prices and may vary based on specific project
              requirements, complexity, and scope. GST applicable as per
              government regulations. Final pricing is provided after
              understanding your complete requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
