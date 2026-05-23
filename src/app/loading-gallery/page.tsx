"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

export default function LoadingGalleryPage() {
  const navItems = [
    { name: "Services", id: "/services" },
    { name: "How It Works", id: "/how-it-works" },
    { name: "Guarantee", id: "/the-sir-james-transit-guarantee" },
    { name: "Gallery", id: "/gallery" },
    { name: "Loading Gallery", id: "/loading-gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const loadingImages = [
    { id: "1", brand: "Logistics", name: "Precision Loading", price: "Secure", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/forklift-operator-loading-cargo-while-working-warehouse-his-colleagues-are-background_637285-4210.jpg" },
    { id: "2", brand: "Logistics", name: "Heavy Duty Lifting", price: "Verified", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-containers-arrangement_23-2149705544.jpg" },
    { id: "3", brand: "Logistics", name: "Container Security", price: "Managed", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663056.jpg" },
    { id: "4", brand: "Logistics", name: "Warehouse Flow", price: "Tracking", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-driving-warehouse-loading-machine_23-2148923134.jpg" },
    { id: "5", brand: "Logistics", name: "Cargo Prep", price: "Stable", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662916.jpg" },
    { id: "6", brand: "Logistics", name: "Export Ready", price: "Ready", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-perfume-bottle_23-2149234340.jpg" },
    { id: "7", brand: "Logistics", name: "Heavy Gear", price: "Strong", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-trucker-front-truck-trailer-with-cars_342744-1283.jpg" },
    { id: "8", brand: "Logistics", name: "Final Sweep", price: "Clear", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/truck-electric-car-highway-symbol-transport-evolution_169016-70036.jpg" },
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
            title="Heavy-Duty Loading Mastery"
            description="Responsive motion showcase of our precise handling processes for all heavy cargo."
            gridVariant="four-items-2x2-equal-grid"
            animationType="blur-reveal"
            textboxLayout="split"
            useInvertedBackground={false}
            products={loadingImages}
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
