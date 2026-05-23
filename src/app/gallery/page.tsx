"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

export default function GalleryPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const galleryItems = [
    { id: "p1", brand: "Logistics", name: "Heavy Duty Loading", price: "Secure", rating: 5, reviewCount: "2026", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-containers-arrangement_23-2149705544.jpg?_wi=2" },
    { id: "p2", brand: "Logistics", name: "Vehicle Securement", price: "Verified", rating: 5, reviewCount: "2026", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dyzp7sGs874KHVqcZpKRlG0BRH/uploaded-1779315072666-rnat9as3.jpg?_wi=2" },
    { id: "p3", brand: "Logistics", name: "Industrial Machinery", price: "Handled", rating: 5, reviewCount: "2026", imageSrc: "http://img.b2bpic.net/free-photo/forklift-operator-loading-cargo-while-working-warehouse-his-colleagues-are-background_637285-4210.jpg?_wi=2" },
    { id: "p4", brand: "Logistics", name: "Bulk Inventory", price: "Tracking", rating: 5, reviewCount: "2026", imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662913.jpg" }
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

        <div id="gallery" data-section="gallery" className="py-20">
          <ProductCardTwo
            title="Professional Cargo Logistics"
            description="An alternating grid showcase of our premium packing, loading, and tracking standards for Dubai to Ghana freight."
            gridVariant="two-columns-alternating-heights"
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            products={galleryItems}
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