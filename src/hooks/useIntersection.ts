'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

interface UseIntersectionReturn {
  ref: React.RefObject<HTMLElement | null>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export const useIntersection = ({
  threshold = 0.1,
  root = null,
  rootMargin = '50px',
  freezeOnceVisible = false,
}: UseIntersectionOptions = {}): UseIntersectionReturn => {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<HTMLElement>(null);

  const frozen = freezeOnceVisible && inView;

  useEffect(() => {
    const element = ref.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !element) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry) {
          const isIntersecting = entry.isIntersecting;
          setInView(isIntersecting);
          setEntry(entry);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  const prevInView = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (prevInView.current !== undefined && prevInView.current !== inView) {
      // Performance optimization: trigger repaint only when necessary
      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          // Trigger any necessary DOM updates
        });
      }
    }
    prevInView.current = inView;
  }, [inView]);

  return { 
    ref, 
    inView, 
    ...(entry !== undefined && { entry })
  };
};
