'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  bundleSize?: string;
  memoryUsage?: string;
}

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
        }
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, fcp: Math.round(lastEntry.startTime) }));
        }
      });
      fcpObserver.observe({ type: 'paint', buffered: true });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb: Math.round(ttfb) }));
      }
    };

    // Track memory usage
    const trackMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const used = Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100;
        const total = Math.round(memory.totalJSHeapSize / 1024 / 1024 * 100) / 100;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: `${used}MB / ${total}MB` 
        }));
      }
    };

    // Track bundle size (approximation)
    const trackBundleSize = async () => {
      try {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const jsResources = resources.filter(resource => 
          resource.name.includes('.js') && 
          resource.name.includes('_next')
        );
        
        const totalSize = jsResources.reduce((acc, resource) => {
          return acc + (resource.transferSize || 0);
        }, 0);
        
        const sizeInKB = Math.round(totalSize / 1024 * 100) / 100;
        setMetrics(prev => ({ 
          ...prev, 
          bundleSize: `${sizeInKB}KB` 
        }));
      } catch (error) {
        console.warn('Bundle size tracking failed:', error);
      }
    };

    trackWebVitals();
    trackMemoryUsage();
    trackBundleSize();

    // Update memory usage periodically
    const memoryInterval = setInterval(trackMemoryUsage, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (metric: string, value: number) => {
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'text-green-600' : value <= 4000 ? 'text-yellow-600' : 'text-red-600';
      case 'fid':
        return value <= 100 ? 'text-green-600' : value <= 300 ? 'text-yellow-600' : 'text-red-600';
      case 'cls':
        return value <= 0.1 ? 'text-green-600' : value <= 0.25 ? 'text-yellow-600' : 'text-red-600';
      case 'fcp':
        return value <= 1800 ? 'text-green-600' : value <= 3000 ? 'text-yellow-600' : 'text-red-600';
      case 'ttfb':
        return value <= 600 ? 'text-green-600' : value <= 1500 ? 'text-yellow-600' : 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg max-w-sm">
      <div className="p-3">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-sm font-semibold text-gray-800">Performance Monitor</h3>
          <span className="text-xs text-gray-500">
            {isVisible ? '▼' : '▶'}
          </span>
        </button>
        
        {isVisible && (
          <div className="mt-3 space-y-2 text-xs">
            {metrics.lcp && (
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={getScoreColor('lcp', metrics.lcp)}>
                  {metrics.lcp}ms
                </span>
              </div>
            )}
            
            {metrics.fcp && (
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={getScoreColor('fcp', metrics.fcp)}>
                  {metrics.fcp}ms
                </span>
              </div>
            )}
            
            {metrics.cls !== undefined && (
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={getScoreColor('cls', metrics.cls)}>
                  {metrics.cls}
                </span>
              </div>
            )}
            
            {metrics.ttfb && (
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span className={getScoreColor('ttfb', metrics.ttfb)}>
                  {metrics.ttfb}ms
                </span>
              </div>
            )}
            
            {metrics.bundleSize && (
              <div className="flex justify-between">
                <span>Bundle:</span>
                <span className="text-blue-600">{metrics.bundleSize}</span>
              </div>
            )}
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className="text-purple-600">{metrics.memoryUsage}</span>
              </div>
            )}
            
            <div className="pt-2 mt-2 border-t border-gray-200">
              <button
                onClick={() => window.location.reload()}
                className="w-full text-center py-1 px-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
              >
                Refresh Metrics
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
