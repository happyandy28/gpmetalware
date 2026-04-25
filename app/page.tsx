"use client";

import Link from "next/link";
import { ArrowRight, Users, Wrench, Award, Factory } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { ImageStoreProvider } from "@/lib/image-store";

function HomeContent() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Factory,
      title: t("20+ Years Experience", "20多年經驗"),
      description: t(
        "Since 2005, we have been manufacturing high-quality POP displays for global brands.",
        "自2005年以來，我們一直為全球品牌製造高品質的POP展示架。"
      ),
    },
    {
      icon: Users,
      title: t("300+ Skilled Workers", "300+熟練工人"),
      description: t(
        "Our professional team ensures consistent quality and on-time delivery.",
        "我們的專業團隊確保始終如一的品質和準時交付。"
      ),
    },
    {
      icon: Wrench,
      title: t("Custom Solutions", "定制解決方案"),
      description: t(
        "OEM/ODM services for metal, wood, and acrylic display stands.",
        "提供五金、木材和亞克力展示架的OEM/ODM服務。"
      ),
    },
    {
      icon: Award,
      title: t("Quality Certified", "品質認證"),
      description: t(
        "ISO certified manufacturing processes ensuring premium quality.",
        "ISO認證的製造流程確保優質品質。"
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            {t(
              "Custom POP Display Manufacturing",
              "定制POP展示架製造"
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
            {t(
              "Professional factory in Dongguan, China. We specialize in custom metal, wood, and acrylic retail display stands for global brands.",
              "中國東莞專業工廠。我們專注於為全球品牌定制五金、木材和亞克力零售展示架。"
            )}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg">
                {t("Get a Quote", "獲取報價")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                {t("View Products", "查看產品")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground">
            {t("Why Choose GP Metalware?", "為什麼選擇GP Metalware？")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            {t("Ready to Start Your Project?", "準備開始您的項目嗎？")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            {t(
              "Contact us today for a free quote. Our team is ready to help you create the perfect display solution.",
              "今天聯繫我們獲取免費報價。我們的團隊隨時準備幫助您創建完美的展示解決方案。"
            )}
          </p>
          <Link href="/contact" className="inline-block mt-8">
            <Button variant="secondary" size="lg">
              {t("Contact Us Now", "立即聯繫我們")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <ImageStoreProvider>
      <HomeContent />
    </ImageStoreProvider>
  );
}
