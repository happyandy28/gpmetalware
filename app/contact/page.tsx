"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        t(
          "Failed to send message. Please try again or email us directly.",
          "發送消息失敗。請重試或直接給我們發送電子郵件。"
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("Address", "地址"),
      content: t(
        "Dongguan City, Guangdong Province, China",
        "中國廣東省東莞市"
      ),
    },
    {
      icon: Phone,
      title: t("Phone", "電話"),
      content: "+86 769 1234 5678",
    },
    {
      icon: Mail,
      title: t("Email", "電子郵件"),
      content: "andylai@gpmetalware.com",
    },
    {
      icon: Clock,
      title: t("Business Hours", "營業時間"),
      content: t(
        "Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)",
        "週一至週五：上午9:00 - 下午6:00（GMT+8）"
      ),
    },
  ];

  if (isSubmitted) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center p-8 rounded-lg border border-primary/30 bg-primary/5">
            <div className="text-4xl mb-4 text-primary">&#10003;</div>
            <h3 className="text-xl font-semibold text-foreground">
              {t("Thank You!", "謝謝您！")}
            </h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "We've received your message and will get back to you within 24 hours.",
                "我們已收到您的消息，將在24小時內回覆您。"
              )}
            </p>
            <Button
              className="mt-6"
              onClick={() => setIsSubmitted(false)}
            >
              {t("Send Another Message", "發送另一條消息")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("Contact Us", "聯繫我們")}
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t(
              "Have a project in mind? Get in touch with us and we'll help you create the perfect display solution.",
              "有項目想法嗎？與我們聯繫，我們將幫助您創建完美的展示解決方案。"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-6">
              {t("Send us a Message", "給我們發送消息")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {t("Name", "姓名")} *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={t("Your name", "您的姓名")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t("Email", "電子郵件")} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("your@email.com", "您的郵箱")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">{t("Company", "公司")}</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t("Company name", "公司名稱")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("Phone", "電話")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("Phone number", "電話號碼")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  {t("Message", "消息")} *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t(
                    "Tell us about your project...",
                    "告訴我們您的項目..."
                  )}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("Sending...", "發送中...")}
                  </>
                ) : (
                  t("Send Message", "發送消息")
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {t("Contact Information", "聯繫信息")}
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-muted/50">
              <h3 className="font-medium text-foreground mb-2">
                {t("Quick Response", "快速回覆")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
                  "我們通常在工作日內24小時內回覆所有詢問。如有緊急事項，請直接致電我們。"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
