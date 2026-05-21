"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import LegalSection from '@/components/legal/LegalSection';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function TransitGuaranteePage() {
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
              { name: "Transit Guarantee", id: "/the-sir-james-transit-guarantee" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Sir James Delivery"
          />
        </div>

        <div id="legal" data-section="legal">
          <LegalSection
            layout="page"
            title="The Sir James Transit Guarantee"
            sections={[
              {
                heading: "Our Commitment",                content: {
                  type: "paragraph",                  text: "At Sir James Delivery Company, we eliminate the anxiety of international shipping. Every single consignment—whether it is an exclusive luxury timepiece, fragile perfumes, or multi-ton industrial gym machinery—is backed by our zero-damage, clear-pricing commitment. From the exact moment your goods are cataloged at our Dubai hub to the second they are safely received at our secure warehouse in Ghana, your cargo is fully insured, monitored under strict logistics surveillance, and processed with 100% customs clearance. If we receive it in Dubai, you will collect it in Ghana in pristine condition. No exceptions, no hidden fees, no delays."
                }
              }
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