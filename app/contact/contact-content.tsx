"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import {
  services,
  budgetOptions,
  contactMethods,
  siteConfig,
} from "@/lib/constants";
import { leadFormSchema, type LeadFormData } from "@/schemas/lead";
import { submitLead } from "@/actions/leads";

export default function ContactPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    const result = await submitLead(data);
    if (result.success) {
      setSubmitted(true);
      toast.success("Enquiry submitted successfully!");
      reset();
    } else {
      toast.error(result.error || "Something went wrong");
    }
  };

  const whatsappUrl = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20GURUVANTA,%20I%20want%20to%20discuss%20a%20project.`
    : null;

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-surface-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-all";
  const labelClasses = "block text-sm font-medium text-text-primary mb-2";
  const errorClasses = "text-xs text-red-400 mt-1";

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full" />

        <div className="container-main relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance max-w-3xl mx-auto mb-8 tracking-wide"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-loose tracking-wide"
          >
            Tell us about your project and get a free consultation. We typically
            respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section ref={formRef} className="section-padding bg-bg-secondary" id="consultation">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <div>
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-3 tracking-wide">
                  Get in Touch
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  Reach out through any of these channels or fill in the form.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="glass-card p-4 flex items-start gap-4 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
                      Email
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="glass-card p-4 flex items-start gap-4 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
                      Phone
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="glass-card p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      Location
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-start gap-4 group !border-green-500/20 hover:!border-green-500/40 block"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-green-400 transition-colors">
                        WhatsApp
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Chat with us directly
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="glass-card p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-text-primary mb-3">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-text-secondary max-w-md mx-auto mb-6">
                    Thank you for contacting GURUVANTA ITs SOLUTION PVT LTD. We
                    have received your enquiry and will review your requirements.
                    We typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-card p-8 space-y-6"
                  id="quote-form"
                >
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                    Get a Free Quote
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={inputClasses}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className={errorClasses}>{errors.name.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="companyName" className={labelClasses}>
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Your company (optional)"
                        className={inputClasses}
                        {...register("companyName")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={inputClasses}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className={errorClasses}>{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClasses}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className={errorClasses}>{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className={labelClasses}>
                        Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        className={inputClasses}
                        {...register("service")}
                      >
                        <option value="" className="bg-bg-primary">
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option
                            key={s.id}
                            value={s.title}
                            className="bg-bg-primary"
                          >
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className={errorClasses}>{errors.service.message}</p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        className={inputClasses}
                        {...register("budget")}
                      >
                        <option value="" className="bg-bg-primary">
                          Select budget (optional)
                        </option>
                        {budgetOptions.map((b) => (
                          <option
                            key={b}
                            value={b}
                            className="bg-bg-primary"
                          >
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className={labelClasses}>
                      Project Description{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      placeholder="Tell us about your project — what you need, your goals, timeline preferences..."
                      className={inputClasses + " resize-none"}
                      {...register("description")}
                    />
                    {errors.description && (
                      <p className={errorClasses}>
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Contact Method */}
                  <div>
                    <label htmlFor="contactMethod" className={labelClasses}>
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      className={inputClasses}
                      {...register("contactMethod")}
                    >
                      <option value="" className="bg-bg-primary">
                        Select preference (optional)
                      </option>
                      {contactMethods.map((m) => (
                        <option
                          key={m}
                          value={m}
                          className="bg-bg-primary"
                        >
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full !py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
