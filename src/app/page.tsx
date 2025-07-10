
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DropsSection from '@/components/sections/DropsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import SizingSection from '@/components/sections/SizingSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import CartSection from '@/components/sections/CartSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DropsSection />
      <ProductsSection />
      <SizingSection />
      <AboutSection />
      <ContactSection />
      <CartSection />
    </>
  );
}
