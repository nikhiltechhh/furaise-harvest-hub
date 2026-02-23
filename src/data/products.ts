import turmericPolished from "@/assets/turmeric-polished.jpg";
import turmericUnpolished from "@/assets/turmeric-unpolished.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import sonaRice from "@/assets/sona-rice.jpg";
import turmericFarm from "@/assets/turmeric-farm.jpg";
import riceField from "@/assets/rice-field.jpg";
import qualityLab from "@/assets/quality-lab.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  priceRange?: string;
  unit: string;
  minOrder: string;
  image: string;
  gallery: string[];
  category: "turmeric" | "rice";
  details: string[];
  curcuminContent?: string;
}

export const products: Product[] = [
  {
    id: "turmeric-dp-35",
    name: "Turmeric Double Polish > 3.5% Curcumin",
    description: "Premium double-polished turmeric fingers with high curcumin content exceeding 3.5%, ideal for extraction and export markets.",
    price: "$2,300 - $2,800",
    priceRange: "2300-2800",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: "https://i.ibb.co/WpNQZ1hv/Whats-App-Image-2026-02-23-at-3-26-11-PM.jpg",
    gallery: ["https://i.ibb.co/WpNQZ1hv/Whats-App-Image-2026-02-23-at-3-26-11-PM.jpg", "https://i.ibb.co/1t8JDfVX/Whats-App-Image-2026-02-23-at-3-26-48-PM.jpg"],
    category: "turmeric",
    curcuminContent: "> 3.5%",
    details: [
      "High curcumin content (> 3.5%)",
      "Double polished finish",
      "Low moisture content",
      "EU MRL compliant",
      "ETO-free material",
      "Lab tested with certificates",
    ],
  },
  {
    id: "turmeric-dp-23",
    name: "Turmeric Double Polish > 2.3% Curcumin",
    description: "Quality double-polished turmeric fingers with curcumin content exceeding 2.3%, suitable for food processing and export.",
    price: "$2,150",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: "https://i.ibb.co/L4qbQJB/Whats-App-Image-2026-02-23-at-3-27-51-PM.jpg",
    gallery: ["https://i.ibb.co/L4qbQJB/Whats-App-Image-2026-02-23-at-3-27-51-PM.jpg", "https://i.ibb.co/ds3QTBfT/Whats-App-Image-2026-02-23-at-3-27-52-PM.jpg"],
    category: "turmeric",
    curcuminContent: "> 2.3%",
    details: [
      "Curcumin content > 2.3%",
      "Double polished finish",
      "Properly dried material",
      "Pre-shipment inspection available",
      "Aflatoxin & residue lab reports",
      "Bulk container supply",
    ],
  },
  {
    id: "turmeric-unpolished",
    name: "Unpolished Turmeric > 3.5% Curcumin)",
    description: "Natural unpolished turmeric fingers, raw and unprocessed, ideal for industrial extraction and Ayurvedic applications.",
    price: "$1,960",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: "https://i.ibb.co/5hk7LV0r/Whats-App-Image-2026-02-23-at-3-34-13-PM.jpg",
    gallery: ["https://i.ibb.co/5hk7LV0r/Whats-App-Image-2026-02-23-at-3-34-13-PM.jpg", "https://i.ibb.co/VYRyZScq/Whats-App-Image-2026-02-23-at-3-33-55-PM.jpg"],
    category: "turmeric",
    details: [
      "Raw unprocessed turmeric",
      "Suitable for curcumin extraction",
      "Oleoresin manufacturing grade",
      "Year-round sourcing",
      "Lot-wise quality verification",
      "Container load capability",
    ],
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice 1121",
    description: "Premium long-grain Basmati 1121 rice, aromatic and aged, meeting international export standards.",
    price: "$880 - $1,200",
    priceRange: "880-1200",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: "https://i.ibb.co/fzzP5bfp/Whats-App-Image-2026-02-23-at-3-50-05-PM.jpg",
    gallery: ["https://i.ibb.co/fzzP5bfp/Whats-App-Image-2026-02-23-at-3-50-05-PM.jpg", "https://i.ibb.co/S7ZmgWty/Whats-App-Image-2026-02-23-at-3-50-05-PM-1.jpg"],
    category: "rice",
    details: [
      "Premium Basmati 1121 variety",
      "Long grain aromatic rice",
      "Clean and graded",
      "Proper moisture control",
      "Export-compliant documentation",
      "Residue compliance (EU standards)",
    ],
  },
  {
    id: "sona-masuri",
    name: "Sona Masuri Rice",
    description: "High-quality Sona Masuri rice, a popular Indian medium-grain variety known for its lightweight and aromatic qualities.",
    price: "$510 -$580",
    priceRange: "510-580",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: "https://i.ibb.co/DgGwLyyx/Whats-App-Image-2026-02-23-at-5-22-51-PM.jpg",
    gallery: ["https://i.ibb.co/DgGwLyyx/Whats-App-Image-2026-02-23-at-5-22-51-PM.jpg", "https://i.ibb.co/dCrS7cY/Whats-App-Image-2026-02-23-at-4-01-38-PM.jpg"],
    category: "rice",
    details: [
      "Premium Sona Masuri variety",
      "Medium grain rice",
      "Clean and properly graded",
      "Moisture controlled",
      "Bulk container supply",
      "Stable long-term supply",
    ],
  },
];
