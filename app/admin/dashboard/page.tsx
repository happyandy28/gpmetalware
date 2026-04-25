"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ImageIcon, FolderOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { factoryImages, products } from "@/lib/static-data";

export default function AdminDashboardPage() {
  const router = useRouter();

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

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Image Management Guide
            </h1>
            <p className="text-muted-foreground mt-1">
              Static image configuration for GitHub Pages deployment
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Instructions */}
        <div className="mb-8 p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            How to Add Images
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              For static deployment (GitHub Pages), images must be placed in the{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">public/images/</code>{" "}
              directory before building.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Directory Structure:</h3>
              <pre className="text-sm font-mono">
{`public/
├── images/
│   ├── factory/
│   │   ├── factory-1.jpg
│   │   ├── factory-2.jpg
│   │   └── ...
│   └── products/
│       ├── product-1.jpg
│       ├── product-2.jpg
│       └── ...`}
              </pre>
            </div>
            <p>
              After adding images, run <code className="bg-muted px-2 py-1 rounded text-sm">npm run build</code>{" "}
              to generate the static site.
            </p>
          </div>
        </div>

        {/* Factory Images List */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Factory Images ({factoryImages.length} configured)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {factoryImages.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-muted">
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.title.en}</p>
                  <p className="text-sm text-muted-foreground font-mono">{item.image}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Images List */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Product Images ({products.length} configured)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-muted">
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{product.name.en}</p>
                  <p className="text-xs text-muted-foreground font-mono">{product.image}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Edit Instructions */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50 border">
          <h3 className="font-medium text-foreground mb-2">
            To modify product/factory data:
          </h3>
          <p className="text-sm text-muted-foreground">
            Edit the file <code className="bg-muted px-2 py-1 rounded">lib/static-data.ts</code>{" "}
            to add, remove, or update products and factory images. Each entry includes
            name (EN/ZH), description, category, and image path.
          </p>
        </div>
      </div>
    </div>
  );
}
