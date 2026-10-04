"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappUrl = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20GURUVANTA,%20I%20want%20to%20discuss%20a%20project.`
    : null;

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-600/20 via-accent-500/10 to-primary-600/20 blur-[100px] rounded-full" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-bg-secondary to-primary-950/80 border border-primary-500/20 rounded-3xl" />
          <div className="absolute inset-0 bg-grid opacity-10 rounded-3xl" />

          {/* Glow edges */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-balance tracking-wide"
            >
              Ready to Build Your{" "}
              <span className="gradient-text">Digital Solution?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-loose tracking-wide"
            >
              Tell us about your project and let us help you turn your ideas
              into reality. Get a free consultation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link
                href="/contact"
                className="btn-primary text-base !px-8 !py-3.5"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base !px-8 !py-3.5 !border-green-500/30 hover:!bg-green-500/10 hover:!border-green-500/50"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  WhatsApp Us
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
