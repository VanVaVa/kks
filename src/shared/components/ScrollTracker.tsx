"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from "react";

type VisibilityContextType = {
  visibleElementId: string | null;
  scrollOffset: number | null;
  scrollToElement: (id: string) => void;
};

const VisibilityContext = createContext<VisibilityContextType>({
  visibleElementId: null,
  scrollOffset: null,
  scrollToElement: () => {},
});

export const useVisibility = () => useContext(VisibilityContext);

export const VisibilityProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: VisibilityContextType;
}) => (
  <VisibilityContext.Provider value={value}>
    {children}
  </VisibilityContext.Provider>
);

type ScrollTrackerProps = {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  scrollBehavior?: ScrollBehavior;
};

export const ScrollTracker = ({
  children,
  rootMargin = "0px",
  threshold = 0.5,
  scrollBehavior = "smooth",
}: ScrollTrackerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleElementId, setVisibleElementId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const scrollToElement = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: scrollBehavior,
          block: "start",
        });
      }
    },
    [scrollBehavior]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElementId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    const container = containerRef.current;
    Array.from(container.children).forEach((child) => {
      if (child.id) {
        observerRef.current?.observe(child);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <VisibilityProvider
      value={{ visibleElementId, scrollToElement, scrollOffset }}
    >
      <div ref={containerRef}>{children}</div>
    </VisibilityProvider>
  );
};
