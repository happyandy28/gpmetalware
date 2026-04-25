"use client";

import { Users, Wrench, Award, Factory, ImageIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ImageStoreProvider, useImageStore } from "@/lib/image-store";
import { DisplayImage } from "@/components/display-image";

function AboutContent() {
  const { t } = useLanguage();
  const { getImagesByPrefix } = useImageStore();

  // Get ALL factory images without any limitation
  const factoryImages = getImagesByPrefix("factory-");
  
  // Generate image slots - show uploaded images + remaining placeholders
  const totalSlots = Math.max(8, factoryImages.length);
  const imageSlots = Array.from({ length: totalSlots }, (_, i) => {
    const imageId = `factory-${i + 1}`;
    return { id: imageId, index: i + 1 };
  });

  const stats = [
    {
      icon: Factory,
      value: "20+",
      label: t("Years Experience", "年經驗"),
    },
    {
      icon: Users,
      value: "300+",
      label: t("Skilled Workers", "熟練工人"),
    },
    {
      icon: Wrench,
      value: "50+",
      label: t("Machines", "台機器"),
    },
    {
      icon: Award,
      value: "1000+",
      label: t("Projects Completed", "項目完成"),
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("About GP Metalware", "關於GP Metalware")}
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            {t(
              "Professional POP display manufacturer located in Dongguan, China. Since 2005, we have been serving global brands with high-quality custom display solutions.",
              "位於中國東莞的專業POP展示架製造商。自2005年以來，我們一直為全球品牌提供高品質的定制展示解決方案。"
            )}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border bg-card"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Factory Gallery - DISPLAYS ALL IMAGES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t("Our Factory", "我們的工廠")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imageSlots.map((slot) => (
              <DisplayImage
                key={slot.id}
                id={slot.id}
                alt={t(`Factory Image ${slot.index}`, `工廠圖片 ${slot.index}`)}
                className="rounded-lg"
                aspectRatio="aspect-video"
                placeholderIcon={<ImageIcon className="h-8 w-8" />}
              />
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {t("Our Story", "我們的故事")}
          </h2>
          <div className="prose prose-gray dark:prose-invert">
            <p className="text-muted-foreground mb-4">
              {t(
                "GP Metalware was founded in 2005 in Dongguan, Guangdong Province, China. We started as a small workshop specializing in metal fabrication and have grown into a comprehensive POP display manufacturing facility.",
                "GP Metalware成立於2005年，位於中國廣東省東莞市。我們從一個專注於金屬加工的小作坊起步，現已發展成為一家綜合性的POP展示架製造工廠。"
              )}
            </p>
            <p className="text-muted-foreground mb-4">
              {t(
                "Today, we operate a 50,000 square meter factory with over 300 skilled workers. Our facility is equipped with modern machinery for metal processing, wood working, and acrylic fabrication.",
                "如今，我們運營著一家佔地50,000平方米的工廠，擁有300多名熟練工人。我們的設施配備了現代化的金屬加工、木工和亞克力製造機械。"
              )}
            </p>
            <p className="text-muted-foreground">
              {t(
                "We serve clients worldwide, including major retail brands in North America, Europe, and Asia. Our commitment to quality, competitive pricing, and on-time delivery has made us a trusted partner for custom POP display solutions.",
                "我們服務於全球客戶，包括北美、歐洲和亞洲的主要零售品牌。我們對品質、有競爭力的價格和準時交付的承諾使我們成為定制POP展示解決方案的值得信賴的合作夥伴。"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <ImageStoreProvider>
      <AboutContent />
    </ImageStoreProvider>
  );
}
