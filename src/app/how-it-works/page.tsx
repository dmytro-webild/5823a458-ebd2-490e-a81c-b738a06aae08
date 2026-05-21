"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function HowItWorksPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
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

        <div id="blueprint" data-section="blueprint">
            <MetricSplitMediaAbout
            useInvertedBackground={false}
            title="Shipping From Dubai to Ghana in 2 Easy Steps"
            description="Our streamlined process ensures maximum security and efficiency."
            metrics={[
                { value: "1", title: "Hub Delivery;You secure the goods; we take complete ownership.
Drop your items off at our centralized Dubai hub, or have your UAE suppliers ship directly to our receiving depot. The moment your cargo arrives, our specialized team conducts an immediate premium inventory check, logs your items, and packages them into high-security, reinforced transit containers tailored to their specific category (from luxury timepieces to heavy gym equipment)." },
                { value: "2", title: "Premium Transit & Secure Pickup;We handle the border logistics; you collect in Ghana.
Your cargo is fast-tracked through air or sea transit under constant tracking and logistics surveillance. Our dedicated customs clearing desk manages 100% of the complex port paperwork and border clearance internally. Your goods travel straight to our private, secure warehouse facility in Ghana, fully processed and ready for a smooth, hassle-free pickup." },
                { value: "3", title: "Ghana Pickup" },
            ]}
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/aerial-view-bridge-creek-powerlines-with-cars-road_181624-24539.jpg"
            imageAlt="Aerial view of a bridge over the creek"
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