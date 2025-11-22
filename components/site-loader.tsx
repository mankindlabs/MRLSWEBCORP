"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3 seconds then fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        <Image
          src="/images/loaders/superassembly_gitcloning.gif"
          alt="Loading"
          width={800}
          height={800}
          priority
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
}
