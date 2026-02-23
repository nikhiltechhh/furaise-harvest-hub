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
    price: "$2,300 – $2,800",
    priceRange: "2300-2800",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: turmericPolished,
    gallery: [turmericPolished, turmericFarm, qualityLab],
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
    image: turmericPolished,
    gallery: [turmericPolished, turmericFarm, qualityLab],
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
    name: "Unpolished Turmeric",
    description: "Natural unpolished turmeric fingers, raw and unprocessed, ideal for industrial extraction and Ayurvedic applications.",
    price: "$1,960",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: turmericUnpolished,
    gallery: [turmericUnpolished, turmericFarm, qualityLab],
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
    price: "$880 – $1,200",
    priceRange: "880-1200",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: basmatiRice,
    gallery: [basmatiRice, riceField, qualityLab],
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
    price: "$510 – $580",
    priceRange: "510-580",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: sonaRice,
    gallery: [sonaRice, riceField, qualityLab],
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
