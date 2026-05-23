"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';

export default function GalleryPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
    { name: "Gallery", id: "/gallery" },
    { name: "Loading Gallery", id: "/loading-gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const galleryItems = [
    { title: "Heavy Duty Loading", description: "Secure Logistics", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-containers-arrangement_23-2149705544.jpg?_wi=2" },
    { title: "Vehicle Securement", description: "Verified Standards", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dyzp7sGs874KHVqcZpKRlG0BRH/uploaded-1779315072666-rnat9as3.jpg?_wi=2" },
    { title: "Industrial Machinery", description: "Handled Safely", imageSrc: "http://img.b2bpic.net/free-photo/forklift-operator-loading-cargo-while-working-warehouse-his-colleagues-are-background_637285-4210.jpg?_wi=2" },
    { title: "Bulk Inventory", description: "Real-time Tracking", imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662913.jpg" }
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

        {galleryItems.map((item, index) => (
          <div key={index} id={`gallery-${index}`} data-section="gallery" className="py-12 border-b border-gray-100">
            <FeatureCardOne
              title={item.title}
              description={item.description}
              gridVariant="two-columns-alternating-heights"
              animationType="slide-up"
              textboxLayout="split"
              useInvertedBackground={false}
              features={[item]}
              gridClassName="gap-8"
              cardClassName="min-h-[400px]"
            />
          </div>
        ))}

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