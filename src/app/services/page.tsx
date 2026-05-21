"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ServicesPage() {
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
            navItems={[
              { name: "Services", id: "/services" },
              { name: "How It Works", id: "/how-it-works" },
              { name: "Shipment Specs", id: "/#specs" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Sir James Delivery"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTwentyNine
            title="Our Services"
            description="Expert freight forwarding and secure logistics tailored to your needs from Dubai to Ghana."
            gridVariant="bento-grid"
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { title: "Luxury Shipping", description: "High-security transit for watches and premium goods.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-containers-arrangement_23-2149705544.jpg", titleImageSrc: "", buttonText: "Learn More" },
              { title: "Auto Logistics", description: "Specialized vehicle shipping with expert strapping.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dyzp7sGs874KHVqcZpKRlG0BRH/uploaded-1779315072666-rnat9as3.jpg", titleImageSrc: "", buttonText: "Learn More" },
              { title: "Industrial Cargo", description: "Heavy machinery and equipment handled with care.", imageSrc: "http://img.b2bpic.net/free-photo/forklift-operator-loading-cargo-while-working-warehouse-his-colleagues-are-background_637285-4210.jpg", titleImageSrc: "", buttonText: "Learn More" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Services", href: "/services" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms", href: "#" }] },
            ]}
            bottomLeftText="© 2026 Sir James Delivery Company."
            bottomRightText="Safe. Swift. Secure."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}