'use client';

import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import Market from '@/components/landing/Market';
import Comparison from '@/components/landing/Comparison';
import Team from '@/components/landing/Team';
import Traction from '@/components/landing/Traction';
import BusinessModel from '@/components/landing/BusinessModel';
import Roadmap from '@/components/landing/Roadmap';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Market />
      <Comparison />
      <Team />
      <Traction />
      <BusinessModel />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
