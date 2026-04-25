"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface ImageStore {
  [key: string]: string;
}

interface ImageStoreContextType {
  images: ImageStore;
  setImage: (id: string, dataUrl: string) => void;
  getImage: (id: string) => string | undefined;
  removeImage: (id: string) => void;
  getImagesByPrefix: (prefix: string) => { id: string; src: string }[];
}

const ImageStoreContext = createContext<ImageStoreContextType | undefined>(
  undefined
);

const STORAGE_KEY = "gp-metalware-images";

export function ImageStoreProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageStore>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load images from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setImages(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Failed to load images from localStorage:", error);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save images to localStorage whenever they change
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
      } catch (error) {
        console.error("Failed to save images to localStorage:", error);
      }
    }
  }, [images, isLoaded]);

  const setImage = useCallback((id: string, dataUrl: string) => {
    setImages((prev) => ({ ...prev, [id]: dataUrl }));
  }, []);

  const getImage = useCallback(
    (id: string) => {
      return images[id];
    },
    [images]
  );

  const removeImage = useCallback((id: string) => {
    setImages((prev) => {
      const newImages = { ...prev };
      delete newImages[id];
      return newImages;
    });
  }, []);

  // FIXED: Get ALL images by prefix without any slice limitation
  const getImagesByPrefix = useCallback(
    (prefix: string) => {
      const result: { id: string; src: string }[] = [];
      Object.keys(images).forEach((key) => {
        if (key.startsWith(prefix)) {
          result.push({ id: key, src: images[key] });
        }
      });
      // Sort by numeric suffix (e.g., factory-1, factory-2, etc.)
      result.sort((a, b) => {
        const numA = parseInt(a.id.split("-").pop() || "0", 10);
        const numB = parseInt(b.id.split("-").pop() || "0", 10);
        return numA - numB;
      });
      return result; // Return ALL images, no slice limit
    },
    [images]
  );

  return (
    <ImageStoreContext.Provider
      value={{ images, setImage, getImage, removeImage, getImagesByPrefix }}
    >
      {children}
    </ImageStoreContext.Provider>
  );
}

export function useImageStore() {
  const context = useContext(ImageStoreContext);
  if (context === undefined) {
    throw new Error("useImageStore must be used within an ImageStoreProvider");
  }
  return context;
}
