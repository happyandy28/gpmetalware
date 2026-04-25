"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useImageStore } from "@/lib/image-store";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface DisplayImageProps {
  id: string;
  alt: string;
  className?: string;
  placeholderIcon?: ReactNode;
  placeholderText?: string;
  aspectRatio?: string;
}

export function DisplayImage({
  id,
  alt,
  className = "",
  placeholderIcon,
  placeholderText,
  aspectRatio = "aspect-square",
}: DisplayImageProps) {
  const { t } = useLanguage();
  const { getImage } = useImageStore();
  const imageSrc = getImage(id);

  return (
    <div
      className={cn(
        "relative bg-muted overflow-hidden",
        aspectRatio,
        className
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          {placeholderIcon}
          {placeholderText && (
            <span className="text-xs mt-2">
              {t("Product Image", "產品圖片")}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
