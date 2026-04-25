"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Upload, Trash2, ImageIcon, LogOut, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageStoreProvider, useImageStore } from "@/lib/image-store";

function ImageUploader({
  id,
  label,
  aspectRatio = "aspect-square",
}: {
  id: string;
  label: string;
  aspectRatio?: string;
}) {
  const { getImage, setImage, removeImage } = useImageStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageSrc = getImage(id);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className={`relative ${aspectRatio} bg-muted`}>
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-cover"
              unoptimized
            />
            <button
              onClick={() => removeImage(id)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
              title="Remove image"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <Upload className="h-8 w-8 mb-2" />
            <span className="text-sm">Click to upload</span>
          </button>
        )}
      </div>
      <div className="p-2 text-center">
        <span className="text-xs text-muted-foreground">{label}</span>
        {imageSrc && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="block w-full mt-1 text-xs text-primary hover:underline"
          >
            Replace
          </button>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

function DashboardContent() {
  const router = useRouter();
  const { getImagesByPrefix } = useImageStore();
  const [factorySlots, setFactorySlots] = useState(8);
  const [productSlots, setProductSlots] = useState(12);

  useEffect(() => {
    // Check authentication
    if (sessionStorage.getItem("admin-authenticated") !== "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin-authenticated");
    router.push("/admin");
  };

  // Count actual uploaded images
  const factoryImages = getImagesByPrefix("factory-");
  const productImages = getImagesByPrefix("product-");

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Image Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage factory and product images
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Factory Images Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Factory Images
              </h2>
              <p className="text-sm text-muted-foreground">
                {factoryImages.length} of {factorySlots} images uploaded
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFactorySlots((prev) => prev + 4)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add More Slots
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: factorySlots }, (_, i) => (
              <ImageUploader
                key={`factory-${i + 1}`}
                id={`factory-${i + 1}`}
                label={`Factory Image ${i + 1}`}
                aspectRatio="aspect-video"
              />
            ))}
          </div>
        </section>

        {/* Product Images Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Product Images
              </h2>
              <p className="text-sm text-muted-foreground">
                {productImages.length} of {productSlots} images uploaded
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setProductSlots((prev) => prev + 4)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add More Slots
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: productSlots }, (_, i) => (
              <ImageUploader
                key={`product-${i + 1}`}
                id={`product-${i + 1}`}
                label={`Product ${i + 1}`}
                aspectRatio="aspect-square"
              />
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50 border">
          <h3 className="font-medium text-foreground mb-2">
            <ImageIcon className="h-4 w-4 inline mr-2" />
            Image Storage Info
          </h3>
          <p className="text-sm text-muted-foreground">
            Images are stored in your browser&apos;s local storage. They will persist
            across sessions but are specific to this browser. For production use,
            consider using cloud storage like Vercel Blob.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <ImageStoreProvider>
      <DashboardContent />
    </ImageStoreProvider>
  );
}
