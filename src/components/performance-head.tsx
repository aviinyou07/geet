import Head from "next/head";
import { HERO_CONFIG } from "@/lib/constants";

export default function PerformanceHead() {
  return (
    <Head>
      {/* Preload critical resources */}
      <link
        rel="preload"
        as="image"
        href={HERO_CONFIG.images[0].src}
        fetchPriority="high"
      />
      
      {/* Preload second image for seamless transition */}
      <link
        rel="preload"
        as="image"
        href={HERO_CONFIG.images[1].src}
        fetchPriority="low"
      />
      
      {/* Preload logo */}
      <link
        rel="preload"
        as="image"
        href={HERO_CONFIG.logo.src}
        fetchPriority="high"
      />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
}
