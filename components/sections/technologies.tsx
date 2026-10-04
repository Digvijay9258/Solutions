"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technologies } from "@/lib/constants";

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section ref={ref} className="section-padding relative" id="technologies">
      <div className="container-main">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Technology Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Built With <span className="gradient-text">Modern Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            We use industry-leading technologies to build fast, secure, and
            scalable solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="glass-card px-6 py-3.5 flex items-center gap-3.5 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 group-hover:scale-150 transition-transform" />
              <div>
                <span className="text-sm font-semibold text-text-primary tracking-wide">
                  {tech.name}
                </span>
                <span className="text-xs text-text-muted ml-2.5 tracking-wide">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
