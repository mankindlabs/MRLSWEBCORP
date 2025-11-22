"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface OpenResearchLoaderProps {
  show: boolean;
  targetUrl: string;
}

export default function OpenResearchLoader({ show, targetUrl }: OpenResearchLoaderProps) {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (show && !redirecting) {
      setRedirecting(true);
      // Show loader for 2 seconds then redirect
      const timer = setTimeout(() => {
        window.location.href = targetUrl;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, targetUrl, redirecting]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/gifs/Synthesizing_3_BOX_SHUFFLE.gif"
          alt="Loading Open Research"
          width={400}
          height={400}
          unoptimized
          className="animate-pulse"
        />
      </div>
    </div>
  );
}
