"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Code2,
  Users,
  Shield,
  Lightbulb,
  Rocket,
} from "lucide-react";
import CTASection from "@/components/sections/cta";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and no false promises. We deliver what we commit.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay current with modern technologies and development practices to build future-ready solutions.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Your business goals drive every decision. We listen, understand, and build solutions that serve your needs.",
  },
  {
    icon: Code2,
    title: "Quality",
    description:
      "Clean code, thorough testing, and attention to detail are non-negotiable in every project we deliver.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description:
      "We treat every project with the same level of care and commitment, regardless of size or budget.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "We build solutions designed to scale with your business, supporting your journey from startup to enterprise.",
  },
];

export default function AboutPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const philosophyRef = useRef(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full" />

        <div className="container-main relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance max-w-3xl mx-auto mb-8 tracking-wide"
          >
            Building Technology That{" "}
            <span className="gradient-text">Serves Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-loose tracking-wide"
          >
            GURUVANTA ITs SOLUTION PVT LTD is a technology company focused on
            building high-quality digital solutions that help businesses grow
            and succeed in the modern digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section-padding bg-bg-secondary">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/20 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To empower businesses of all sizes with accessible, high-quality
                technology solutions. We aim to bridge the gap between business
                needs and modern technology, making professional digital
                solutions available to startups, SMEs, and enterprises alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-500/10 border border-accent-500/20 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To become a trusted technology partner for businesses seeking
                reliable, modern, and scalable digital solutions. We envision a
                future where every business, regardless of size, has access to
                enterprise-grade technology tailored to their unique needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding">
        <div className="container-main">
          <div className="section-header">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              What <span className="gradient-text">Drives Us</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section ref={philosophyRef} className="section-padding bg-bg-secondary">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title mb-8"
            >
              How We <span className="gradient-text">Think</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-text-secondary text-left text-base md:text-lg leading-loose tracking-wide"
            >
              <p>
                We believe that great software starts with understanding the
                problem. Before writing a single line of code, we invest time in
                understanding your business, your customers, and your goals.
              </p>
              <p>
                Our development approach combines modern technologies with
                practical engineering. We do not chase trends for the sake of
                it — we choose tools and architectures that genuinely serve
                your project requirements.
              </p>
              <p>
                Transparency is at the core of everything we do. We provide
                honest timelines, clear pricing, and regular updates throughout
                the development process. If something changes, you will be the
                first to know.
              </p>
              <p>
                We also embrace AI-assisted development workflows — what we
                call &ldquo;Vibe Coding&rdquo; — where AI helps accelerate development
                while our engineers review, test, and ensure quality. This
                approach allows us to deliver faster without compromising on
                standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
