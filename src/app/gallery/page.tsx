"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import { useState } from 'react';

export default function GalleryPage() {
  const [galleryItems] = useState([
    { id: "1", title: "Secure Loading", content: "High-tech container loading processes", imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&_wi=1" },
    { id: "2", title: "Vehicle Transit", content: "Specialized vehicle securement techniques", imageSrc: "https://images.unsplash.com/photo-1553440150-13753a7b6832?q=80&w=800&_wi=1" },
    { id: "3", title: "Industrial Handling", content: "Expert industrial gear management", imageSrc: "https://images.unsplash.com/photo-1621905251189-08b45d6a268e?q=80&w=800&_wi=1" },
    { id: "4", title: "Bulk Logistics", content: "Streamlined commercial bulk transit", imageSrc: "https://images.unsplash.com/photo-1566585775320-f62266858276?q=80&w=800&_wi=1" },
    { id: "5", title: "Dubai Hub", content: "Centralized receiving operations", imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&_wi=1" },
    { id: "6", title: "Precision Sorting", content: "Careful inventory management", imageSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&_wi=1" },
    { id: "7", title: "Ghana Warehouse", content: "Secure facility arrival process", imageSrc: "https://images.unsplash.com/photo-1587293852726-70b35612f843?q=80&w=800&_wi=1" },
    { id: "8", title: "Global Tracking", content: "Constant logistics surveillance", imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&_wi=1" }
  ]);

  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
    { name: "Gallery", id: "/gallery" },
    { name: "Loading Gallery", id: "/loading-gallery" },
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

        <div id="gallery" data-section="gallery" className="py-24">
            <FeatureCardTwentyOne
              title="Our Logistics Gallery"
              description="A detailed look at each stage of our professional cargo handling process, presented individually for maximum visual impact."
              accordionItems={galleryItems}
              mediaAnimation="blur-reveal"
              useInvertedBackground={false}
              containerClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Services", href: "/services" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms", href: "/terms" }] },
            ]}
            bottomLeftText="© 2026 Sir James Delivery Company."
            bottomRightText="Safe. Swift. Secure."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}