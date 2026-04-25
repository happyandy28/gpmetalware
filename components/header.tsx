"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("Home", "首頁") },
    { href: "/about", label: t("About Us", "關於我們") },
    { href: "/products", label: t("Products", "產品") },
    { href: "/faq", label: t("FAQ", "常見問題") },
    { href: "/contact", label: t("Contact", "聯繫我們") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">GP Metalware</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "中文" : "EN"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden border-t",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="flex items-center gap-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "中文" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
