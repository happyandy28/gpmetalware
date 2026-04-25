"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t(
        "What types of POP displays do you manufacture?",
        "你們製造哪些類型的POP展示架？"
      ),
      answer: t(
        "We manufacture a wide range of POP displays including metal displays, wood displays, acrylic displays, and mixed-material displays. Our products include floor stands, counter displays, wall-mounted units, and custom designs based on your specifications.",
        "我們製造各種POP展示架，包括金屬展示架、木質展示架、亞克力展示架和複合材料展示架。我們的產品包括落地架、櫃檯展示架、壁掛式裝置以及根據您的規格定制的設計。"
      ),
    },
    {
      question: t(
        "What is your minimum order quantity (MOQ)?",
        "你們的最低訂購量（MOQ）是多少？"
      ),
      answer: t(
        "Our MOQ varies depending on the product complexity. For standard designs, we typically require a minimum of 100 units. For custom designs, the MOQ may be higher. Contact us for specific details about your project.",
        "我們的MOQ因產品複雜程度而異。對於標準設計，我們通常需要最少100個單位。對於定制設計，MOQ可能更高。請聯繫我們了解您項目的具體詳情。"
      ),
    },
    {
      question: t(
        "What is the typical lead time for orders?",
        "訂單的典型交貨時間是多少？"
      ),
      answer: t(
        "Lead time depends on order quantity and product complexity. Standard orders typically take 3-4 weeks for production. Custom designs may require additional time for prototyping. Rush orders can be accommodated with advance notice.",
        "交貨時間取決於訂單數量和產品複雜程度。標準訂單通常需要3-4週的生產時間。定制設計可能需要額外的原型製作時間。提前通知可以安排加急訂單。"
      ),
    },
    {
      question: t(
        "Do you offer OEM/ODM services?",
        "你們提供OEM/ODM服務嗎？"
      ),
      answer: t(
        "Yes, we offer both OEM and ODM services. We can manufacture products based on your designs (OEM) or help you develop new display solutions from concept to production (ODM). Our engineering team can assist with design optimization.",
        "是的，我們提供OEM和ODM服務。我們可以根據您的設計製造產品（OEM），也可以幫助您從概念到生產開發新的展示解決方案（ODM）。我們的工程團隊可以協助進行設計優化。"
      ),
    },
    {
      question: t(
        "What quality certifications do you have?",
        "你們有哪些品質認證？"
      ),
      answer: t(
        "We are ISO 9001 certified and comply with international quality standards. Our factory undergoes regular audits and we maintain strict quality control processes throughout production.",
        "我們已獲得ISO 9001認證，並符合國際品質標準。我們的工廠定期接受審計，我們在整個生產過程中保持嚴格的品質控制流程。"
      ),
    },
    {
      question: t(
        "Can you ship internationally?",
        "你們可以國際發貨嗎？"
      ),
      answer: t(
        "Yes, we ship worldwide. We work with reliable shipping partners for sea, air, and land freight. We can also arrange door-to-door delivery and handle all necessary export documentation.",
        "是的，我們在全球範圍內發貨。我們與可靠的運輸合作夥伴合作，提供海運、空運和陸運服務。我們還可以安排門到門送貨並處理所有必要的出口文件。"
      ),
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("Frequently Asked Questions", "常見問題")}
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t(
              "Find answers to common questions about our products and services.",
              "找到有關我們產品和服務的常見問題的答案。"
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
              >
                <span className="text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
