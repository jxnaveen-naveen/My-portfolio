"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { PERSONAL_INFO } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import {
  Mail,
  Linkedin,
  Github,
  Youtube,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      color: "hover:text-cyan-400",
    },
    {
      name: "GitHub",
      href: PERSONAL_INFO.github,
      icon: Github,
      color: "hover:text-purple-400",
    },
    {
      name: "YouTube",
      href: PERSONAL_INFO.youtube,
      icon: Youtube,
      color: "hover:text-red-400",
    },
    {
      name: "Email",
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: "hover:text-emerald-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="GET IN TOUCH"
          title="Let's Work With Data"
          subtitle="Open for Data Analyst, Data Science Enthusiast, and Business Intelligence opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Form */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="primary" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Recruiters, hiring managers, startups, and team leads — drop a message below to discuss analytical roles or project collaborations.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out. I will review your message and reply promptly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.email ? "border-red-500" : "border-white/10"
                        } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data Analyst Opportunity / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.subject ? "border-red-500" : "border-white/10"
                      } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Naveen, we reviewed your portfolio and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.message ? "border-red-500" : "border-white/10"
                      } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message →"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Right Column - Glass Contact Card */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard glowColor="accent" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-white hover:text-cyan-400 font-medium text-sm transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone Contact</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white hover:text-purple-400 font-medium text-sm transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-white font-medium text-sm">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Availability</div>
                    <div className="text-emerald-400 font-medium text-sm">Full-time / Remote / Hybrid</div>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Social Profiles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 ${social.color} transition-all duration-200 hover:border-white/30`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
