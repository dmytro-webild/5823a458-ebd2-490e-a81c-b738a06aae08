"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([
    { title: "Secure Loading", description: "High-tech container loading processes", imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
    { title: "Vehicle Transit", description: "Specialized vehicle securement techniques", imageSrc: "https://images.unsplash.com/photo-1553440150-13753a7b6832?q=80&w=800" },
    { title: "Industrial Handling", description: "Expert industrial gear management", imageSrc: "https://images.unsplash.com/photo-1621905251189-08b45d6a268e?q=80&w=800" },
    { title: "Bulk Logistics", description: "Streamlined commercial bulk transit", imageSrc: "https://images.unsplash.com/photo-1566585775320-f62266858276?q=80&w=800" },
    { title: "Dubai Hub", description: "Centralized receiving operations", imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" },
    { title: "Precision Sorting", description: "Careful inventory management", imageSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800" },
    { title: "Ghana Warehouse", description: "Secure facility arrival process", imageSrc: "https://images.unsplash.com/photo-1587293852726-70b35612f843?q=80&w=800" },
    { title: "Global Tracking", description: "Constant logistics surveillance", imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800" }
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
            <FeatureCardSix
              title="Our Logistics Gallery"
              description="A look at our professional cargo handling and storage services."
              textboxLayout="split"
              useInvertedBackground={false}
              features={galleryItems}
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
