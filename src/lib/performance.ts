// Simple performance utilities for image loading
export const measureImageLoad = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`📸 Image loaded: ${src} in ${loadTime.toFixed(2)}ms`);
      resolve();
    };
    
    img.onerror = () => {
      console.error(`❌ Image failed to load: ${src}`);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
};

export const preloadCriticalImages = (imageSrcs: string[]) => {
  console.log('🚀 Preloading critical images...');
  return Promise.allSettled(
    imageSrcs.map(src => measureImageLoad(src))
  );
};
