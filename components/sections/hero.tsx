"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/8 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-950/50 blur-[80px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-primary-400/60" style={{ animation: "float 4s ease-in-out infinite" }} />
      <div className="absolute bottom-32 left-[10%] w-2 h-2 rounded-full bg-accent-400/60" style={{ animation: "float 5s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/3 left-[20%] w-2 h-2 rounded-full bg-primary-300/40" style={{ animation: "float 6s ease-in-out infinite 2s" }} />

      <div className="container-main relative z-10 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>IT Solutions for Modern Businesses</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-balance max-w-4xl mx-auto mb-8 tracking-wide"
        >
          Transform Ideas Into{" "}
          <span className="gradient-text">Digital Solutions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-loose tracking-wide"
        >
          Websites, Vibe-Coded Solutions, CRM, ERP, E-Commerce and Custom
          Software built for modern businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link href="/contact" className="btn-primary text-base !px-8 !py-3.5">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
          <Link href="/contact#consultation" className="btn-secondary text-base !px-8 !py-3.5">
            <Play className="w-4 h-4 mr-1" />
            Get Free Consultation
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "Modern", label: "Tech Stack" },
            { value: "Custom", label: "Solutions" },
            { value: "Scalable", label: "Architecture" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
