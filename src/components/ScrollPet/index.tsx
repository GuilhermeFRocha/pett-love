import { useRef, useEffect, useState, ReactNode } from "react";

import "./styles.scss";

interface ScrollPetTransitionProps {
  children: ReactNode;
}

const ScrollPet = ({ children }: ScrollPetTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.95 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-transition ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollPet;
