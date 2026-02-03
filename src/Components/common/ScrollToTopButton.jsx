import { useEffect, useRef, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const tickingRef = useRef(false);
  const lastVisibleRef = useRef(false);
  const rafScrollRef = useRef(0);

  useEffect(() => {
    const updateVisibility = () => {
      tickingRef.current = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const nextVisible = progress >= 0.6;
      if (lastVisibleRef.current !== nextVisible) {
        lastVisibleRef.current = nextVisible;
        setVisible(nextVisible);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafScrollRef.current = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafScrollRef.current);
    };
  }, []);

  const rafScrollTopRef = useRef(0);

  const handleClick = () => {
    cancelAnimationFrame(rafScrollTopRef.current);
    const start = window.scrollY || document.documentElement.scrollTop;
    const duration = 650;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(t);
      const next = Math.round(start * (1 - eased));
      window.scrollTo(0, next);
      if (t < 1) {
        rafScrollTopRef.current = requestAnimationFrame(step);
      }
    };

    rafScrollTopRef.current = requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={`scroll-to-top ${visible ? "show" : ""}`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
