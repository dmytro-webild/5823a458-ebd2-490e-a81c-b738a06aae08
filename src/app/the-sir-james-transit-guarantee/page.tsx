"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import LegalSection from '@/components/legal/LegalSection';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function GuaranteePage() {
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
        <div id="nav" data-section="nav">
            <NavbarStyleApple
                navItems={[
                    { name: "Home", id: "/" },
                    { name: "Services", id: "/services" },
                    { name: "How It Works", id: "/how-it-works" },
                    { name: "Contact", id: "/contact" },
                ]}
                brandName="Sir James Delivery"
            />
        </div>

        <div id="guarantee" data-section="guarantee">
            <LegalSection
                layout="page"
                title="The Sir James Transit Guarantee"
                subtitle="Our commitment to your cargo's security and timely delivery."
                sections={[
                    {
                        heading: "1. Safe Handling",                        content: { type: "paragraph", text: "We treat every item, from luxury goods to heavy machinery, with the utmost care to ensure it arrives in the same condition it was shipped." }
                    },
                    {
                        heading: "2. Customs Assurance",                        content: { type: "paragraph", text: "Our team manages all clearing paperwork to remove the stress of customs for our clients." }
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
    </ThemeProvider>
  );
}