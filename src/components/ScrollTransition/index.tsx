import { useRef, useEffect, useState, ReactNode } from "react";

import "./style.scss";

interface ScrollTransitionProps {
  children: ReactNode;
}

const ScrollTransition = ({ children }: ScrollTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const top = ref?.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top! < windowHeight * 0.95) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

export default ScrollTransition;
