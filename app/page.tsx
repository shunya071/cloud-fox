// app/page.tsx
"use client";

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { ProfileSection } from './components/ProfileSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <ServiceSection />
      <PortfolioSection />
      <PricingSection />
      <ProfileSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
