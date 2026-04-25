// Static data for GP Metalware website
// All images should be placed in the public/images/ directory

export interface ProductItem {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  category: "metal" | "wood" | "acrylic" | "mixed";
  image: string;
}

export interface FactoryImage {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  image: string;
}

// Factory images - place your images in public/images/factory/
export const factoryImages: FactoryImage[] = [
  {
    id: "factory-1",
    title: { en: "Factory Entrance", zh: "工廠入口" },
    image: "/images/factory/factory-1.jpg",
  },
  {
    id: "factory-2",
    title: { en: "Production Line", zh: "生產線" },
    image: "/images/factory/factory-2.jpg",
  },
  {
    id: "factory-3",
    title: { en: "Metal Workshop", zh: "金屬車間" },
    image: "/images/factory/factory-3.jpg",
  },
  {
    id: "factory-4",
    title: { en: "Quality Control", zh: "質量控制" },
    image: "/images/factory/factory-4.jpg",
  },
  {
    id: "factory-5",
    title: { en: "CNC Machines", zh: "CNC機器" },
    image: "/images/factory/factory-5.jpg",
  },
  {
    id: "factory-6",
    title: { en: "Welding Area", zh: "焊接區域" },
    image: "/images/factory/factory-6.jpg",
  },
  {
    id: "factory-7",
    title: { en: "Painting Room", zh: "噴漆房" },
    image: "/images/factory/factory-7.jpg",
  },
  {
    id: "factory-8",
    title: { en: "Warehouse", zh: "倉庫" },
    image: "/images/factory/factory-8.jpg",
  },
];

// Product images - place your images in public/images/products/
export const products: ProductItem[] = [
  {
    id: "product-1",
    name: { en: "Metal Floor Display Stand", zh: "金屬落地展示架" },
    description: { en: "Heavy-duty metal display for retail stores", zh: "適用於零售店的重型金屬展示架" },
    category: "metal",
    image: "/images/products/product-1.jpg",
  },
  {
    id: "product-2",
    name: { en: "Rotating Display Rack", zh: "旋轉展示架" },
    description: { en: "360-degree rotating metal display", zh: "360度旋轉金屬展示架" },
    category: "metal",
    image: "/images/products/product-2.jpg",
  },
  {
    id: "product-3",
    name: { en: "Wood Counter Display", zh: "木質櫃台展示架" },
    description: { en: "Premium wood display for countertops", zh: "優質木質櫃台展示架" },
    category: "wood",
    image: "/images/products/product-3.jpg",
  },
  {
    id: "product-4",
    name: { en: "Rustic Wood Stand", zh: "復古木架" },
    description: { en: "Natural wood finish display stand", zh: "天然木飾面展示架" },
    category: "wood",
    image: "/images/products/product-4.jpg",
  },
  {
    id: "product-5",
    name: { en: "Acrylic Showcase", zh: "亞克力展示櫃" },
    description: { en: "Crystal clear acrylic display case", zh: "水晶透明亞克力展示櫃" },
    category: "acrylic",
    image: "/images/products/product-5.jpg",
  },
  {
    id: "product-6",
    name: { en: "Acrylic Counter Stand", zh: "亞克力櫃台架" },
    description: { en: "Elegant acrylic counter display", zh: "優雅亞克力櫃台展示架" },
    category: "acrylic",
    image: "/images/products/product-6.jpg",
  },
  {
    id: "product-7",
    name: { en: "Metal-Wood Combo Display", zh: "金屬木質組合展示架" },
    description: { en: "Modern metal and wood combination", zh: "現代金屬和木質組合" },
    category: "mixed",
    image: "/images/products/product-7.jpg",
  },
  {
    id: "product-8",
    name: { en: "Multi-Material Stand", zh: "多材料展示架" },
    description: { en: "Metal, wood and acrylic combined", zh: "金屬、木材和亞克力組合" },
    category: "mixed",
    image: "/images/products/product-8.jpg",
  },
  {
    id: "product-9",
    name: { en: "Cosmetics Display Rack", zh: "化妝品展示架" },
    description: { en: "Specialized display for cosmetics", zh: "化妝品專用展示架" },
    category: "acrylic",
    image: "/images/products/product-9.jpg",
  },
  {
    id: "product-10",
    name: { en: "Sunglasses Display Tower", zh: "太陽鏡展示塔" },
    description: { en: "Rotating display for eyewear", zh: "眼鏡旋轉展示架" },
    category: "metal",
    image: "/images/products/product-10.jpg",
  },
  {
    id: "product-11",
    name: { en: "Jewelry Display Case", zh: "珠寶展示櫃" },
    description: { en: "Premium display for jewelry", zh: "珠寶高級展示櫃" },
    category: "acrylic",
    image: "/images/products/product-11.jpg",
  },
  {
    id: "product-12",
    name: { en: "Shoe Display Shelf", zh: "鞋類展示架" },
    description: { en: "Multi-tier shoe display system", zh: "多層鞋類展示系統" },
    category: "metal",
    image: "/images/products/product-12.jpg",
  },
];

// Product categories
export const productCategories = [
  {
    id: "metal",
    name: { en: "Metal Displays", zh: "五金展示架" },
    description: {
      en: "Durable and stylish metal POP displays for retail environments.",
      zh: "適用於零售環境的耐用時尚金屬POP展示架。",
    },
  },
  {
    id: "wood",
    name: { en: "Wood Displays", zh: "木質展示架" },
    description: {
      en: "Natural wood displays with premium finish for upscale retail.",
      zh: "優質飾面天然木材展示架，適用於高端零售。",
    },
  },
  {
    id: "acrylic",
    name: { en: "Acrylic Displays", zh: "亞克力展示架" },
    description: {
      en: "Clear and colorful acrylic displays for product visibility.",
      zh: "透明彩色亞克力展示架，提高產品可見度。",
    },
  },
  {
    id: "mixed",
    name: { en: "Mixed Material", zh: "複合材料" },
    description: {
      en: "Combination of metal, wood, and acrylic for unique designs.",
      zh: "金屬、木材和亞克力的組合，打造獨特設計。",
    },
  },
];

// Contact information
export const contactInfo = {
  address: {
    en: "Building B, No.10, Qiaochang road (Dazhou Section), Dazhou community, Qiaotou town, China, 523525",
    zh: "中國東莞市橋頭鎮大洲社區橋常路（大洲段）10號B棟，523525",
  },
  phones: [
    { label: "NZ", number: "+64 21 08096882" },
    { label: "China", number: "+86-18826823521" },
    { label: "HK", number: "+852-6857 2148" },
  ],
  email: "andylai@gpmetalware.com",
  businessHours: {
    en: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)",
    zh: "週一至週五：上午9:00 - 下午6:00（GMT+8）",
  },
};
