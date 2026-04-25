"use client";

import { Package, ImageIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ImageStoreProvider, useImageStore } from "@/lib/image-store";
import { DisplayImage } from "@/components/display-image";

function ProductsContent() {
  const { t } = useLanguage();
  const { getImagesByPrefix } = useImageStore();

  // Get ALL product images without any limitation
  const productImages = getImagesByPrefix("product-");

  // Product categories
  const categories = [
    {
      id: "metal",
      name: t("Metal Displays", "五金展示架"),
      description: t(
        "Durable and stylish metal POP displays for retail environments.",
        "適用於零售環境的耐用時尚金屬POP展示架。"
      ),
    },
    {
      id: "wood",
      name: t("Wood Displays", "木質展示架"),
      description: t(
        "Natural wood displays with premium finish for upscale retail.",
        "優質飾面天然木材展示架，適用於高端零售。"
      ),
    },
    {
      id: "acrylic",
      name: t("Acrylic Displays", "亞克力展示架"),
      description: t(
        "Clear and colorful acrylic displays for product visibility.",
        "透明彩色亞克力展示架，提高產品可見度。"
      ),
    },
    {
      id: "mixed",
      name: t("Mixed Material", "複合材料"),
      description: t(
        "Combination of metal, wood, and acrylic for unique designs.",
        "金屬、木材和亞克力的組合，打造獨特設計。"
      ),
    },
  ];

  // Generate product slots - show uploaded images + remaining placeholders
  const totalSlots = Math.max(12, productImages.length);
  const productSlots = Array.from({ length: totalSlots }, (_, i) => {
    const imageId = `product-${i + 1}`;
    return { id: imageId, index: i + 1 };
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("Our Products", "我們的產品")}
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            {t(
              "Explore our range of custom POP display solutions. From metal to wood to acrylic, we manufacture high-quality retail displays for brands worldwide.",
              "探索我們的定制POP展示解決方案系列。從金屬到木材再到亞克力，我們為全球品牌製造高品質的零售展示架。"
            )}
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-4 rounded-lg border bg-card text-center hover:shadow-md transition-shadow"
            >
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product Gallery - DISPLAYS ALL IMAGES */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t("Product Gallery", "產品畫廊")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productSlots.map((slot) => (
              <div
                key={slot.id}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <DisplayImage
                  id={slot.id}
                  alt={t(`Product ${slot.index}`, `產品 ${slot.index}`)}
                  aspectRatio="aspect-square"
                  placeholderIcon={<ImageIcon className="h-8 w-8" />}
                  placeholderText={t("Product Image", "產品圖片")}
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm text-foreground">
                    {t(`Display #${slot.index}`, `展示架 #${slot.index}`)}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {t("Custom POP Display", "定制POP展示架")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <ImageStoreProvider>
      <ProductsContent />
    </ImageStoreProvider>
  );
}
