'use client';

import Image from 'next/image';
import { useState, useCallback, memo } from 'react';
import { cn } from '@/lib/utils';
import { PERFORMANCE_CONFIG } from '@/lib/constants';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// High-quality base64 blur placeholder
const DEFAULT_BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

export const OptimizedImage = memo<OptimizedImageProps>(({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  quality = PERFORMANCE_CONFIG.imageOptimization.quality,
  placeholder = 'blur',
  blurDataURL,
  sizes = PERFORMANCE_CONFIG.imageOptimization.sizes.card,
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Error fallback component
  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center',
          'border border-sage-300 rounded-lg',
          className
        )}
        style={{
          ...(width && height ? { width, height } : {}),
          ...(fill ? { width: '100%', height: '100%' } : {}),
        }}
      >
        <div className="text-center p-4">
          <div className="w-8 h-8 mx-auto mb-2 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
          <span className="text-sage-600 text-xs">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        {...(width !== undefined && { width })}
        {...(height !== undefined && { height })}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || DEFAULT_BLUR_DATA}
        sizes={sizes}
        className={cn(
          'object-cover transition-all duration-300 ease-in-out',
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        )}
        onLoad={handleLoad}
        onError={handleError}
        // Performance optimizations
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className={cn(
          'absolute inset-0 bg-sage-100 animate-pulse',
          'flex items-center justify-center'
        )}>
          <div className="w-6 h-6 border-2 border-sage-300 border-t-sage-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';
