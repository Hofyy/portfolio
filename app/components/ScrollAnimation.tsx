import { useState, useEffect, useRef } from "react";

function useOnScreen(ref: any, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // optional: nur einmal animieren
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}

type AnimateOnScrollProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  type?: "fade" | "bar"; // fade = Card/Element, bar = SkillBar
  percentage?: number; // nur für type="bar"
};

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  type = "fade",
  percentage = 100,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-50px");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay]);

  // Fade/Slide Animation
  if (type === "fade") {
    return (
      <div
        ref={ref}
        className={`${className} transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {children}
      </div>
    );
  }

  // Bar Animation
  if (type === "bar") {
    return (
      <div ref={ref} className={className}>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-1000"
            style={{ width: show ? `${percentage}%` : "0%" }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
