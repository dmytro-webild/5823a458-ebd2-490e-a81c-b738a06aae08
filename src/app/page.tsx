"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function LandingPage() {
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
        {
          name: "Services",
          id: "#freight",
        },
        {
          name: "How It Works",
          id: "#blueprint",
        },
        {
          name: "Shipment Specs",
          id: "#specs",
        },
        {
          name: "Office Locations",
          id: "#contact",
        },
      ]}
      brandName="Sir James Delivery"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="From Dubai to Ghana: Your Cargo, Delivered Safely and Fast."
      description="Whether it’s luxury watches, vehicles, or heavy industrial gym machinery, Sir James Delivery Company safely transports your goods from the heart of Dubai straight to our secure warehouse in Ghana. No delays. No hidden fees."
      testimonials={[
        {
          name: "Kwame O.",
          handle: "@ghana_importer",
          testimonial: "Excellent service. My heavy equipment arrived in perfect condition.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662913.jpg",
        },
        {
          name: "Amina B.",
          handle: "@dubai_fashion",
          testimonial: "The best shipping partner for my perfume wholesale business.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662916.jpg",
        },
        {
          name: "John S.",
          handle: "@auto_trader",
          testimonial: "Vehicle transport from Dubai was seamless and fast.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662944.jpg",
        },
        {
          name: "Sarah L.",
          handle: "@gym_pro",
          testimonial: "Great handling of industrial gym machines. Very professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-perfume-bottle_23-2149234340.jpg",
        },
        {
          name: "Michael D.",
          handle: "@bulk_items",
          testimonial: "Customs clearance was handled perfectly every time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/single-glass-bottle-filled-with-clear-liquid-generated-by-ai_188544-19684.jpg",
        },
      ]}
      tag="Daily Shipments • Fully Insured • 100% Customs Cleared"
      buttons={[
        {
          text: "Read Transit Guarantee",
          href: "#why",
        },
        {
          text: "Show Office Addresses",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663056.jpg"
      imageAlt="Global cargo shipping container ship ocean"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-black-white-minimal-design_23-2149253105.jpg",
          alt: "Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-men-cologne-box-flowers-beige_140725-145205.jpg",
          alt: "Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/middle-aged-trucker-front-truck-trailer-with-cars_342744-1283.jpg",
          alt: "Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/truck-electric-car-highway-symbol-transport-evolution_169016-70036.jpg",
          alt: "Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-professional-smiling-truck-driver-with-crossed-arms-transporting-cars-market_342744-1333.jpg",
          alt: "Avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Dubai",
        },
        {
          type: "text",
          text: "Accra",
        },
        {
          type: "text",
          text: "Insurance",
        },
        {
          type: "text",
          text: "Customs",
        },
        {
          type: "text",
          text: "Logistics",
        },
      ]}
    />
  </div>

  <div id="freight" data-section="freight">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "luxury",
          title: "Luxury & Essentials",
          author: "Fragile items",
          description: "Luxury goods are packed in reinforced, climate-controlled security crates.",
          tags: [
            "Watch",
            "Perfume",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-containers-arrangement_23-2149705544.jpg",
        },
        {
          id: "auto",
          title: "Automotive Shipping",
          author: "Vehicle safety",
          description: "Vehicles are shipped via specialized container loading with strapping.",
          tags: [
            "SUV",
            "Sedan",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/two-workers-uniform-workers-with-tools-working-day_1157-46525.jpg",
        },
        {
          id: "heavy",
          title: "Heavy Machinery",
          author: "Industrial gear",
          description: "Heavy machinery is handled with industrial forklifts and steel ties.",
          tags: [
            "Gym Gear",
            "Tools",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/forklift-operator-loading-cargo-while-working-warehouse-his-colleagues-are-background_637285-4210.jpg",
        },
        {
          id: "general",
          title: "General Cargo",
          author: "Commercial bulk",
          description: "Commercial stock utilizes streamlined bulk palletizing options.",
          tags: [
            "Wholesale",
            "Stock",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/wood-pallet-cargo-freight-industry-load-logistic_53876-139691.jpg",
        },
      ]}
      title="We Ship the Spectrum."
      description="Large or Small, We Handle It All. Click for details."
    />
  </div>

  <div id="blueprint" data-section="blueprint">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Shipping From Dubai to Ghana in 3 Easy Steps"
      description="Our streamlined process ensures maximum security and efficiency."
      metrics={[
        {
          value: "1",
          title: "Hub Delivery",
        },
        {
          value: "2",
          title: "Secure Transit",
        },
        {
          value: "3",
          title: "Ghana Pickup",
        },
      ]}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-bridge-creek-powerlines-with-cars-road_181624-24539.jpg"
      imageAlt="Aerial view of a bridge over the creek"
    />
  </div>

  <div id="why" data-section="why">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Guaranteed Safety",
          content: "From delicate perfumes to multi-ton gym equipment, we treat every piece of cargo with absolute care.",
        },
        {
          id: "2",
          title: "Zero Customs Stress",
          content: "Our team manages the complex clearing paperwork in-house for regulatory ease.",
        },
        {
          id: "3",
          title: "Direct Destination",
          content: "Cargo goes directly to our private warehouse facility in Ghana, reducing extra handling.",
        },
      ]}
      title="Operational Standards"
      description="Why choose Sir James Delivery?"
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-driving-warehouse-loading-machine_23-2148923134.jpg"
      imageAlt="Man driving warehouse loading machine"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Stay Connected"
      title="Official Contact & Branch Details"
      description="Ghana Phone: +233241851752 | Dubai WhatsApp: +971526377145 | Email: narhjames@gmail.com"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Services",
              href: "#freight",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2026 Sir James Delivery Company."
      bottomRightText="Safe. Swift. Secure."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
