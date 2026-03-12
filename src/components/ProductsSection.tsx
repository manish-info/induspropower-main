import { useState } from "react";
import ProductCard from "./ProductCard";
import solarPanel from "@/assets/product-solar-panel.jpg";
import lithiumBattery from "@/assets/product-lithium-battery.jpg";
import inverter from "@/assets/product-inverter.jpg";
import mounting from "@/assets/product-mounting.jpg";
import controller from "@/assets/product-controller.jpg";
import cables from "@/assets/product-cables.jpg";

const products = [
  {
  image: "/skybird.jpg",
  title: "1Kw All-in-One Inverter",
  category: "Inverter with Lithium Battery",
  description: "Wall Mountable Inbuilt Lithium Battery Inverter, 1000 VA, 1KW all-in-one inverter with inbuilt lithium battery designed for smart home backup and solar energy usage.",

  features: [
    "Power Rating: 1000VA",
    "DC Voltage: 12.8V",
    "Battery Capacity: 100Ah Lithium",
    "Pure Sine Wave Output",
    "Backup: 3 Hours (400W Load)",
    "Supports 300W–500W Solar Panel",
    "Charging Time: 5–6 Hours",
    "Display: Voltage, UPS Mode, Overload Protection",
    "Battery Life: 10-15 Years",
    "Warranty: 5 Years Battery & 2 Years Inverter"
  ]
},
  {
    image: solarPanel,
    title: "Monocrystalline Solar Panels",
    category: "Solar Panels",
    description: "High-efficiency monocrystalline panels delivering superior performance in all weather conditions.",
    features: ["540W – 600W capacity", "22%+ cell efficiency", "Anti-reflective glass coating", "25-year performance warranty"],
  },
  {
    image: lithiumBattery,
    title: "LiFePO4 Battery Packs",
    category: "Lithium Batteries",
    description: "Long-lasting lithium iron phosphate batteries for reliable solar energy storage solutions.",
    features: ["5kWh – 20kWh options", "6000+ cycle life", "Built-in BMS protection", "10-year warranty"],
  },
  {
    image: inverter,
    title: "Solar Inverters",
    category: "Inverters",
    description: "Advanced hybrid and on-grid inverters with smart monitoring and maximum power tracking.",
    features: ["3kW – 50kW range", "98.6% peak efficiency", "Wi-Fi monitoring", "IP65 rated enclosure"],
  },
  {
    image: mounting,
    title: "Mounting Structures",
    category: "Accessories",
    description: "Premium aluminium and galvanized steel mounting systems for all roof types and ground installations.",
    features: ["Corrosion resistant", "Quick-lock assembly", "Wind load tested", "Adjustable tilt angle"],
  },
  {
    image: controller,
    title: "MPPT Charge Controllers",
    category: "Controllers",
    description: "Smart MPPT charge controllers that optimize solar harvesting and battery charging efficiency.",
    features: ["30A – 100A models", "99% tracking efficiency", "LCD display", "Multi-battery support"],
  },
  {
    image: cables,
    title: "Solar Cables & Connectors",
    category: "Accessories",
    description: "UV-resistant DC solar cables and IP67 rated MC4 connectors for secure, long-lasting connections.",
    features: ["TUV certified", "UV & weather resistant", "4mm² – 10mm² sizes", "20-year outdoor life"],
  },
];

const ProductsSection = ({ showHeader = true }) => {

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
        <div className="text-center mb-14">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
    Our Products
  </span>

  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
    Complete Solar Product Range
  </h2>

  <p className="text-muted-foreground max-w-xl mx-auto">
    From solar panels to lithium batteries and inverters,
    we provide reliable solar energy solutions for homes
    and businesses.
  </p>
          {/* <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">Our Products</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Solar Product Range
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From panels to batteries, we provide everything you need for a complete solar power system.
          </p> */}
        </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,6).map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
        <div className="text-center mt-10">
  <a
href="/products"
className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
>
View More Products
</a>
</div>
      </div>
    </section>
  );
};

export default ProductsSection;
