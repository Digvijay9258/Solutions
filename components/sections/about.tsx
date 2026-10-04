"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-bg-secondary" id="about">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 blur-xl" />
              <div className="relative glass-card p-8 h-full flex flex-col justify-center !hover:transform-none">
                <div className="space-y-6">
                  {[
                    { label: "Mission", value: "Empower businesses with technology" },
                    { label: "Approach", value: "Client-first, quality-driven" },
                    { label: "Technology", value: "Modern, scalable, secure" },
                    { label: "Support", value: "Transparent communication" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center shrink-0">
                        <span className="text-primary-400 font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary text-base mb-1">
                          {item.label}
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title text-left">
              Building Digital <span className="gradient-text">Futures</span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary mb-7 leading-loose tracking-wide">
              GURUVANTA ITs SOLUTION PVT LTD is a technology company focused on
              building high-quality digital solutions for businesses of all
              sizes. We specialize in web development, custom software, CRM, ERP,
              and e-commerce platforms.
            </p>
            <p className="text-base md:text-lg text-text-secondary mb-10 leading-loose tracking-wide">
              Our approach is simple: understand your business deeply, plan
              meticulously, build with modern technology, and support you
              beyond launch. We believe in transparent communication, honest
              timelines, and delivering solutions that truly serve your business
              goals.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
