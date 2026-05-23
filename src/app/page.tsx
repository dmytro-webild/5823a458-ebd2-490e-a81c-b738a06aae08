"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import { useState } from 'react';

export default function LandingPage() {
  const [galleryItems] = useState([
    { id: "1", title: "Secure Loading", description: "High-tech container loading processes", tag: "Loading", imageSrc: "https://images.unsplash.com/photo-1594993875739-1661d92f22ad?q=80&w=800&_wi=2" },
    { id: "2", title: "Vehicle Transit", description: "Specialized vehicle securement techniques", tag: "Transit", imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&_wi=2" },
    { id: "3", title: "Industrial Handling", description: "Expert industrial gear management", tag: "Handling", imageSrc: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&_wi=2" },
    { id: "4", title: "Bulk Logistics", description: "Streamlined commercial bulk transit", tag: "Logistics", imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&_wi=2" },
    { id: "5", title: "Dubai Hub", description: "Centralized receiving operations", tag: "Facility", imageSrc: "https://images.unsplash.com/photo-1587293852726-70b35612f843?q=80&w=800&_wi=2" },
    { id: "6", title: "Precision Sorting", description: "Careful inventory management", tag: "Operations", imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&_wi=2" }
  ]);

  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={navItems}
            brandName="Sir James Delivery"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardTestimonial
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            title="From Dubai to Ghana: Your Cargo, Delivered Safely and Fast."
            description="Whether it’s luxury watches, vehicles, or heavy industrial gym machinery, Sir James Delivery Company safely transports your goods from the heart of Dubai straight to our secure warehouse in Ghana. No delays. No hidden fees."
            testimonials={[]}
            tag="Daily Shipments • Fully Insured • 100% Customs Cleared"
            buttons={[
              { text: "Read Transit Guarantee", href: "/the-sir-james-transit-guarantee" },
              { text: "Contact", href: "/contact" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663056.jpg"
          />
        </div>

        <div id="process" data-section="process">
          <MetricSplitMediaAbout
            useInvertedBackground={false}
            title=" Shipping from Dubai to Ghana in 2 simple steps"
            description="Our streamlined process ensures maximum security and efficiency for all your cargo."
            metrics={[
              { value: "1", title: "Hub Collection,Deliver your goods or have your suppliers ship directly to our Dubai receiving hub. We immediately inspect, inventory, and securely pack your cargo into specialized transit containers." },
              { value: "2", title: "Secure Transit,We handle the global transit, tracking, and 100% of the customs clearance paperwork. Your pristine cargo goes straight to our private Ghana warehouse, ready for hassle-free collection." },
              { value: "3", title: "Ghana Arrival" }
            ]}
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/aerial-view-bridge-creek-powerlines-with-cars-road_181624-24539.jpg?_wi=1"
          />
        </div>

        <div id="freight" data-section="freight">
          <FeatureCardTwentyFour
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[]}
            title="We Ship the Spectrum."
            description="Large or Small, We Handle It All. Click for details."
          />
        </div>

        <div id="why" data-section="why">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[]}
            title="Operational Standards"
            description="Why choose Sir James Delivery?"
            faqsAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/man-driving-warehouse-loading-machine_23-2148923134.jpg"
          />
        </div>

        <div id="gallery" data-section="gallery" className="py-20">
          <FeatureCardMedia
            title="Professional Cargo Logistics"
            description="A free-flowing, spacious view of our premium packing and logistics standards."
            textboxLayout="default"
            useInvertedBackground={false}
            features={galleryItems}
            animationType="blur-reveal"
            gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            containerClassName="max-w-7xl mx-auto px-8"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Services", items: [{ label: "Shipping", href: "/services" }, { label: "Gallery", href: "/gallery" }] },
              { title: "Support", items: [{ label: "Contact", href: "/contact" }, { label: "Guarantee", href: "/the-sir-james-transit-guarantee" }] }
            ]}
            bottomLeftText="© 2026 Sir James Delivery Company."
            bottomRightText="Safe. Swift. Secure."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}