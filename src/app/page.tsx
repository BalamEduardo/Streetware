
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DropsSection from '@/components/sections/DropsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import LookbookSection from '@/components/sections/LookbookSection';
import SizingSection from '@/components/sections/SizingSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DropsSection />
      <ProductsSection />
      <LookbookSection />
      <SizingSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
