"use client";

import { useState } from "react";
import SubHero from "@/components/SubHero";
import { AlertTriIcon } from "@/components/icons";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  cat: string;
  badge?: string;
}

const products: Product[] = [
  // OTC Medications
  { id: "otc1", name: "Ibuprofen 200mg (100ct)", price: 8.99, cat: "otc", badge: "Popular" },
  { id: "otc2", name: "Acetaminophen 500mg (100ct)", price: 7.99, cat: "otc" },
  { id: "otc3", name: "Diphenhydramine 25mg (24ct)", price: 5.49, cat: "otc" },
  { id: "otc4", name: "Loratadine 10mg (30ct)", price: 9.99, cat: "otc" },
  { id: "otc5", name: "Omeprazole 20mg (42ct)", price: 14.99, cat: "otc" },
  { id: "otc6", name: "Guaifenesin DM Cough Syrup 8oz", price: 8.49, cat: "otc" },
  { id: "otc7", name: "Hydrocortisone Cream 1% (1oz)", price: 4.99, cat: "otc" },
  { id: "otc8", name: "Antacid Chewable Tablets (72ct)", price: 6.49, cat: "otc" },
  // Medical Supplies
  { id: "med1", name: "Nitrile Exam Gloves (100ct)", price: 12.99, cat: "medical", badge: "Bulk" },
  { id: "med2", name: "Surgical Face Masks (50ct)", price: 9.99, cat: "medical" },
  { id: "med3", name: "Adhesive Bandages Variety (100ct)", price: 6.99, cat: "medical" },
  { id: "med4", name: "Gauze Pads 4x4 Sterile (25ct)", price: 5.49, cat: "medical" },
  { id: "med5", name: "First Aid Kit Complete", price: 24.99, cat: "medical", badge: "Best Value" },
  { id: "med6", name: "Digital Thermometer", price: 9.99, cat: "medical" },
  { id: "med7", name: "Blood Pressure Monitor", price: 34.99, cat: "medical" },
  { id: "med8", name: "Pulse Oximeter", price: 19.99, cat: "medical" },
  // Vitamins & Supplements
  { id: "vit1", name: "Vitamin D3 5000 IU (120ct)", price: 12.99, cat: "vitamins" },
  { id: "vit2", name: "Multivitamin Senior Formula (90ct)", price: 16.99, cat: "vitamins", badge: "Popular" },
  { id: "vit3", name: "Omega-3 Fish Oil 1000mg (90ct)", price: 14.99, cat: "vitamins" },
  { id: "vit4", name: "Calcium + D3 (120ct)", price: 10.99, cat: "vitamins" },
  { id: "vit5", name: "Probiotic 50 Billion CFU (30ct)", price: 22.99, cat: "vitamins" },
  { id: "vit6", name: "Magnesium Glycinate 400mg (60ct)", price: 13.99, cat: "vitamins" },
  // Snacks & Beverages
  { id: "snk1", name: "Mixed Nuts Variety Pack", price: 7.99, cat: "snacks" },
  { id: "snk2", name: "Protein Bars (12 pack)", price: 19.99, cat: "snacks" },
  { id: "snk3", name: "Sparkling Water Variety (12pk)", price: 6.99, cat: "snacks" },
  { id: "snk4", name: "Dark Chocolate Almonds (8oz)", price: 5.99, cat: "snacks" },
  { id: "snk5", name: "Kettle Chips Sea Salt (8oz)", price: 3.99, cat: "snacks" },
  { id: "snk6", name: "Trail Mix Energy Blend (10oz)", price: 6.49, cat: "snacks" },
  // Beer & Wine
  { id: "bw1", name: "Cabernet Sauvignon (750ml)", price: 14.99, cat: "beer-wine", badge: "Staff Pick" },
  { id: "bw2", name: "Chardonnay (750ml)", price: 12.99, cat: "beer-wine" },
  { id: "bw3", name: "Pinot Noir (750ml)", price: 15.99, cat: "beer-wine" },
  { id: "bw4", name: "IPA Craft Beer (6-pack)", price: 11.99, cat: "beer-wine" },
  { id: "bw5", name: "Lager (12-pack)", price: 14.99, cat: "beer-wine" },
  { id: "bw6", name: "Ros\u00E9 (750ml)", price: 11.99, cat: "beer-wine" },
  // Personal Care
  { id: "pc1", name: "Hand Sanitizer 8oz", price: 3.99, cat: "personal" },
  { id: "pc2", name: "Moisturizing Lotion (16oz)", price: 8.99, cat: "personal" },
  { id: "pc3", name: "Sunscreen SPF 50 (6oz)", price: 10.99, cat: "personal" },
  { id: "pc4", name: "Lip Balm SPF 15 (3-pack)", price: 4.99, cat: "personal" },
  { id: "pc5", name: "Antibacterial Soap (2-pack)", price: 5.99, cat: "personal" },
  { id: "pc6", name: "Toothpaste Whitening (2-pack)", price: 7.99, cat: "personal" },
];

const shopCategories = [
  { key: "all", label: "All Products" },
  { key: "otc", label: "OTC Medications" },
  { key: "medical", label: "Medical Supplies" },
  { key: "vitamins", label: "Vitamins & Supplements" },
  { key: "snacks", label: "Snacks & Beverages" },
  { key: "beer-wine", label: "Beer & Wine" },
  { key: "personal", label: "Personal Care" },
];

const catColors: Record<string, { bg: string; accent: string }> = {
  otc: { bg: "linear-gradient(135deg, #E8F4F8, #D4EEF6)", accent: "#0095C8" },
  medical: { bg: "linear-gradient(135deg, #E8F8F0, #D0F0E0)", accent: "#2D8B5E" },
  vitamins: { bg: "linear-gradient(135deg, #FFF4E6, #FFE8CC)", accent: "#E67E22" },
  snacks: { bg: "linear-gradient(135deg, #FFF0F0, #FFE0E0)", accent: "#E74C3C" },
  "beer-wine": { bg: "linear-gradient(135deg, #F0E8FF, #E4D8FF)", accent: "#8B5CF6" },
  personal: { bg: "linear-gradient(135deg, #F0F8FF, #E0EEFF)", accent: "#3B82F6" },
};

function CatIcon({ cat }: { cat: string }) {
  const cc = catColors[cat] || catColors.otc;
  const a = cc.accent;

  if (cat === "otc") return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="16" y="8" width="24" height="40" rx="4" fill={a} opacity="0.15" stroke={a} strokeWidth="2"/>
      <rect x="16" y="8" width="24" height="12" rx="4" fill={a} opacity="0.3"/>
      <line x1="22" y1="14" x2="34" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <rect x="22" y="28" width="12" height="2" rx="1" fill={a} opacity="0.5"/>
      <rect x="22" y="33" width="8" height="2" rx="1" fill={a} opacity="0.3"/>
      <circle cx="40" cy="40" r="10" fill={a} opacity="0.2"/>
      <line x1="36" y1="40" x2="44" y2="40" stroke={a} strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="36" x2="40" y2="44" stroke={a} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (cat === "medical") return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="18" width="40" height="28" rx="4" fill={a} opacity="0.12" stroke={a} strokeWidth="2"/>
      <rect x="22" y="10" width="12" height="10" rx="2" fill={a} opacity="0.2" stroke={a} strokeWidth="1.5"/>
      <line x1="24" y1="28" x2="32" y2="28" stroke={a} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="28" y1="24" x2="28" y2="32" stroke={a} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="18" cy="38" r="3" fill={a} opacity="0.25"/>
      <circle cx="38" cy="38" r="3" fill={a} opacity="0.25"/>
    </svg>
  );
  if (cat === "vitamins") return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <ellipse cx="28" cy="28" rx="10" ry="18" fill={a} opacity="0.15" stroke={a} strokeWidth="2"/>
      <line x1="18" y1="28" x2="38" y2="28" stroke={a} strokeWidth="1.5" strokeDasharray="3 2"/>
      <ellipse cx="28" cy="20" rx="8" ry="7" fill={a} opacity="0.25"/>
      <circle cx="14" cy="16" r="4" fill={a} opacity="0.15"/>
      <circle cx="42" cy="16" r="4" fill={a} opacity="0.15"/>
      <circle cx="14" cy="40" r="3" fill={a} opacity="0.1"/>
      <circle cx="42" cy="40" r="3" fill={a} opacity="0.1"/>
      <path d="M25 22 L28 18 L31 22" stroke={a} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
  if (cat === "snacks") return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M14 44 Q14 18 28 12 Q42 18 42 44 Z" fill={a} opacity="0.12" stroke={a} strokeWidth="2"/>
      <path d="M20 44 Q20 26 28 20 Q36 26 36 44" fill={a} opacity="0.15"/>
      <line x1="14" y1="44" x2="42" y2="44" stroke={a} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="25" cy="32" r="2" fill={a} opacity="0.4"/>
      <circle cx="31" cy="28" r="2" fill={a} opacity="0.3"/>
      <circle cx="28" cy="36" r="1.5" fill={a} opacity="0.35"/>
    </svg>
  );
  if (cat === "beer-wine") return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M20 16 Q16 28 20 36 L20 46" stroke={a} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M36 16 Q40 28 36 36 L36 46" stroke={a} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="18" y1="46" x2="38" y2="46" stroke={a} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 16 Q28 14 36 16" stroke={a} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="28" cy="26" rx="8" ry="4" fill={a} opacity="0.15"/>
      <path d="M22 24 Q28 20 34 24" fill={a} opacity="0.2"/>
      <circle cx="24" cy="10" r="2" fill={a} opacity="0.3"/>
      <circle cx="32" cy="10" r="2" fill={a} opacity="0.2"/>
      <circle cx="28" cy="8" r="1.5" fill={a} opacity="0.25"/>
    </svg>
  );
  // personal care
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M22 10 Q22 6 28 6 Q34 6 34 10 L36 18 L20 18 Z" fill={a} opacity="0.2" stroke={a} strokeWidth="1.5"/>
      <rect x="18" y="18" width="20" height="32" rx="6" fill={a} opacity="0.12" stroke={a} strokeWidth="2"/>
      <rect x="24" y="26" width="8" height="10" rx="3" fill={a} opacity="0.2"/>
      <line x1="28" y1="29" x2="28" y2="33" stroke={a} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="42" r="2" fill={a} opacity="0.25"/>
    </svg>
  );
}

function getBadgeColor(badge: string) {
  if (badge === "Popular") return "bg-teal";
  if (badge === "Staff Pick") return "bg-[#8B5CF6]";
  return "bg-[#E67E22]";
}

export default function ShopPage() {
  const [shopCat, setShopCat] = useState("all");
  const { addToCart } = useCart();

  const filteredProducts = shopCat === "all" ? products : products.filter(p => p.cat === shopCat);

  return (
    <>
      <SubHero
        title="Shop"
        subtitle="OTC medications, medical supplies, vitamins, snacks, beer, wine, and more. Delivered to your door or available for pickup."
      />

      <div className="sec bg-white" style={{ paddingTop: 40 }}>
        <div className="max-w-[1100px] mx-auto">
          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap mb-9 pb-5 border-b border-border">
            {shopCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setShopCat(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 ${
                  shopCat === cat.key
                    ? "bg-teal text-white border border-teal"
                    : "bg-warm text-text-primary border border-border hover:border-teal/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Age verification for beer & wine */}
          {shopCat === "beer-wine" && (
            <div className="flex gap-3 items-center p-4 px-[22px] rounded-xl bg-warning-bg border border-warning-border mb-7">
              <AlertTriIcon />
              <p className="text-sm text-warning-text">
                You must be 21 or older to purchase alcohol. Age verification required at delivery.
              </p>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {filteredProducts.map((product) => {
              const cc = catColors[product.cat] || catColors.otc;
              return (
                <div key={product.id} className="card !p-0 overflow-hidden flex flex-col">
                  <div
                    className="h-40 flex items-center justify-center relative"
                    style={{ background: cc.bg }}
                  >
                    <CatIcon cat={product.cat} />
                    {product.badge && (
                      <span
                        className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-white ${getBadgeColor(product.badge)}`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-[18px_20px] flex-1 flex flex-col">
                    <h4 className="font-semibold text-[15px] text-navy mb-2 leading-[1.4] flex-1">
                      {product.name}
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-teal">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-[18px] py-2 rounded-full bg-navy text-white border-none text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-navy-light"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery note */}
          <div className="mt-10 p-6 px-7 rounded-[14px] bg-accent text-center">
            <p className="font-semibold text-navy mb-1.5">Free delivery on orders over $25</p>
            <p className="text-sm text-text-light">
              Same-day delivery available across Los Angeles. Orders placed before 2 PM ship the same day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
