"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function ContactPage() {
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

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Contact Us"
            description="whatsapp contact: +233241851752 | call now: +971526377145 | Email: narhjames@gmail.com"
            inputs={[{ name: "name", type: "text", placeholder: "Full Name" }, { name: "email", type: "email", placeholder: "Email Address" }]} 
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