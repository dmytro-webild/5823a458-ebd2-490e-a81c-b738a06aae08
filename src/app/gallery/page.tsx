"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import { useState } from 'react';

export default function GalleryPage() {
  const [galleryItems] = useState([
    { id: "1", title: "Secure Loading", content: "High-tech container loading processes" },
    { id: "2", title: "Vehicle Transit", content: "Specialized vehicle securement techniques" },
    { id: "3", title: "Industrial Handling", content: "Expert industrial gear management" },
    { id: "4", title: "Bulk Logistics", content: "Streamlined commercial bulk transit" },
    { id: "5", title: "Dubai Hub", content: "Centralized receiving operations" },
    { id: "6", title: "Precision Sorting", content: "Careful inventory management" },
    { id: "7", title: "Ghana Warehouse", content: "Secure facility arrival process" },
    { id: "8", title: "Global Tracking", content: "Constant logistics surveillance" },
    { id: "9", title: "Automotive Strapping", content: "Detailed vehicle securement" },
    { id: "10", title: "Heavy Gear Tie-down", content: "Heavy industrial machinery protocols" },
    { id: "11", title: "Temperature Control", content: "Climate controlled shipping units" },
    { id: "12", title: "Customs Processing", content: "Rapid port clearance documentation" },
    { id: "13", title: "Inventory Scanning", content: "Barcode-based intake tracking" },
    { id: "14", title: "Load Optimization", content: "Maximized container volumetric efficiency" }
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
              videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dyzp7sGs874KHVqcZpKRlG0BRH/uploaded-1779531628605-p8zpmh2n.mp4"
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