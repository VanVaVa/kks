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

// Типы для контекста
type VisibilityContextType = {
  visibleElementId: string | null;
  scrollToElement: (id: string) => void;
};

// Создаем контекст для видимого элемента
const VisibilityContext = createContext<VisibilityContextType>({
  visibleElementId: null,
  scrollToElement: () => {},
});

// Хук для доступа к видимому элементу
export const useVisibility = () => useContext(VisibilityContext);

// Провайдер контекста
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

// Пропсы для ScrollTracker
type ScrollTrackerProps = {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  scrollBehavior?: ScrollBehavior;
};

// Компонент-обертка
export const ScrollTracker = ({
  children,
  rootMargin = "0px",
  threshold = 0.5,
  scrollBehavior = "smooth",
}: ScrollTrackerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleElementId, setVisibleElementId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    if (!containerRef.current) return;

    // Создаем IntersectionObserver
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

    // Наблюдаем все дочерние элементы с ID
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
    <VisibilityProvider value={{ visibleElementId, scrollToElement }}>
      <div ref={containerRef}>{children}</div>
    </VisibilityProvider>
  );
};
