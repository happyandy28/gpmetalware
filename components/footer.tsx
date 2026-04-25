"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              GP Metalware
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "Professional POP display manufacturer since 2005. Custom metal, wood, and acrylic retail display solutions.",
                "自2005年以來的專業POP展示架製造商。定制五金、木材和亞克力零售展示解決方案。"
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("Quick Links", "快速連結")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("About Us", "關於我們")}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("Products", "產品")}
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("FAQ", "常見問題")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("Contact", "聯繫我們")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("Contact Us", "聯繫我們")}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {t(
                    "Dongguan, Guangdong, China",
                    "中國廣東省東莞市"
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+86 18826823521</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:andylai@gpmetalware.com"
                  className="hover:text-primary transition-colors"
                >
                  andylai@gpmetalware.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} GP Metalware.{" "}
            {t("All rights reserved.", "保留所有權利。")}
          </p>
        </div>
      </div>
    </footer>
  );
}
