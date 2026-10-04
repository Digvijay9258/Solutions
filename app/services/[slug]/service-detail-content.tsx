"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export default function ServiceDetailContent({
  service,
}: {
  service: ServiceData;
}) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full" />

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="section-label"
          >
            Service
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-8 tracking-wide"
          >
            <span className="gradient-text">{service.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl leading-loose tracking-wide"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link href="/contact" className="btn-primary">
              Discuss This Service
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="section-padding bg-bg-secondary">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              className="text-2xl font-heading font-bold mb-10 tracking-wide"
            >
              What&apos;s <span className="gradient-text">Included</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="glass-card p-6 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-400" />
                  </div>
                  <span className="text-text-secondary leading-relaxed tracking-wide">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section ref={techRef} className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              className="text-2xl font-heading font-bold mb-8"
            >
              Technologies <span className="gradient-text">Used</span>
            </motion.h2>

            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="glass-card px-5 py-2.5 text-sm font-medium text-text-primary"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center glass-card p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Let us discuss how {service.title.toLowerCase()} can help your
              business grow. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
