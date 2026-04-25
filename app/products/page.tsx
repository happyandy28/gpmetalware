"use client";

import Image from "next/image";
import { Package, ImageIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { products, productCategories } from "@/lib/static-data";

export default function ProductsPage() {
  const { t, language } = useLanguage();

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
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="p-4 rounded-lg border bg-card text-center hover:shadow-md transition-shadow"
            >
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">
                {language === "zh" ? category.name.zh : category.name.en}
              </h3>
              <p className="text-xs text-muted-foreground">
                {language === "zh" ? category.description.zh : category.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Product Gallery - Static Images */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t("Product Gallery", "產品畫廊")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={product.image}
                    alt={language === "zh" ? product.name.zh : product.name.en}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Hide broken image and show placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const placeholder = target.nextElementSibling;
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = "flex";
                      }
                    }}
                  />
                  <div 
                    className="absolute inset-0 flex-col items-center justify-center text-muted-foreground hidden"
                    style={{ display: "none" }}
                  >
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs mt-2">{t("Product Image", "產品圖片")}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm text-foreground">
                    {language === "zh" ? product.name.zh : product.name.en}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === "zh" ? product.description.zh : product.description.en}
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
