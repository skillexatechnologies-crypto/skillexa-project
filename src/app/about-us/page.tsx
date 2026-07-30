"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Lightbulb, Rocket, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";

const timelineItems = [
  { year: "2010", title: "The Beginning", desc: "Founded with a vision to empower local students to enhance the skills." },
  { year: "2020", title: "Early Growth", desc: "Building our foundation and onboarding early delivery . Establishing our presence in local communities." },
  { year: "2025", title: "Expansion", desc: "Planning to scale across Telangana with 500+ mnc compaines." },
  { year: "Future", title: "The Vision", desc: "Become Telangana most trusted company. Empower 1 million+ coorporates." },
];

const values = [
  { icon: Heart, title: "Community First", desc: "We want to place each and every student in one of the best organizations." },
  { icon: Lightbulb, title: "Innovation", desc: "Leveraging cutting-edge technology to solve real-world problems ." },
  { icon: Users, title: "Trust", desc: "Building lasting relationships based on transparency, reliability, and mutual growth." },
  { icon: Globe, title: "Scalability", desc: "Designed to scale from neighbourhood to nation, empowering businesses everywhere." },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Badge variant="brand" className="mb-6">About Us</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Building the Future of <span className="text-brand-primary">Local Commerce</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Skillexa is an innovative skill development and career-focused platform dedicated to helping students, 
                graduates, job seekers, and professionals build practical, industry-relevant skills. 
                Through technology-driven learning, hands-on training, real-world projects, internships, and career support,
                Skillexa aims to bridge the gap between academic education and industry requirements.
                The platform focuses on empowering learners with the knowledge, confidence, and practical experience
                needed to succeed in today’s competitive job market
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-light/30 to-transparent -z-10" />
      </section>

      <section className="py-24 gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Our Mission & Vision" subtitle="What drives us every day" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <GlassCard hover className="p-10">
                <div className="w-14 h-14 rounded-2xl gradient-primary shadow-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a skilled, confident, and future-ready workforce through accessible, practical, and industry-aligned learning.
                </p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GlassCard hover className="p-10">
                <div className="w-14 h-14 rounded-2xl gradient-primary shadow-lg flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                 Our Mission: To provide quality training, real-world project exposure, internship opportunities, skill certification,
                  and career guidance that support learners in achieving their professional goals.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Our Journey" subtitle="From a small idea to a growing movement" />
          </ScrollReveal>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-16">
              {timelineItems.map((item, i) => (
                <ScrollReveal key={i}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-1">
                      <GlassCard className={`p-8 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                        <span className="text-sm font-bold text-brand-primary">{item.year}</span>
                        <h3 className="text-xl font-black text-gray-900 mt-1 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </GlassCard>
                    </div>
                    <div className="hidden md:flex h-4 w-4 rounded-full gradient-primary shadow-lg border-4 border-white z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
          </ScrollReveal>
          <StaggerContainer className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <GlassCard hover className="p-8 text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl gradient-primary shadow-lg flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="brand" className="mb-4">Founder Message</Badge>
            <h2 className="text-3xl font-black text-gray-900 mb-6">A Note From Our Founder</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-10 md:p-14">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-5xl mb-6"
              >
                “
              </motion.div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                Through our internship programs, learners gain valuable exposure to real-time projects, professional work environments,
                teamwork, and industry practices. We encourage participants to apply their knowledge,
                build strong portfolios, and develop the practical experience needed to pursue successful careers.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">MCT</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Mandava Charan Teja</p>
                  <p className="text-sm text-gray-500">CEO & Founder, LocalWala Food</p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-white/90 mb-10">
            To become a trusted leader in skill development and professional education by creating a future-ready workforce equipped with practical knowledge, 
              innovative thinking, and industry-relevant skills.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/restaurant-partners">
                <Button size="lg" variant="secondary" className="shadow-xl">
                  Onboard  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Careers
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
