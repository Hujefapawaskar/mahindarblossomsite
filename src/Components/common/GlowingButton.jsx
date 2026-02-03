import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";

const GlowingButton = forwardRef(({ children, className = "" }, ref) => {
  const buttonRef = useRef(null);
  const glowRef = useRef(null);
  const sweepRef = useRef(null);

  const setButtonRef = (node) => {
    buttonRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    if (!buttonRef.current || !glowRef.current || !sweepRef.current) return;
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        opacity: 0,
        scale: 1.08,
        duration: 1.4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        sweepRef.current,
        { x: "-120%" },
        {
          x: "120%",
          duration: 2.4,
          ease: "power2.inOut",
          repeat: -1,
        }
      );
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={setButtonRef}
      className={`group relative px-10 py-3 text-white font-semibold tracking-wide
        bg-linear-to-r from-gray-800 to-gray-900
        shadow-lg shadow-cyan-500/20
        transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/70
        clip-cut ${className}`}
    >
      {/* Glow border */}
      <span
        ref={glowRef}
        className="absolute inset-0 -z-10 blur-md opacity-60
        bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 clip-cut"
      ></span>

      {/* Shine sweep */}
      <span className="absolute inset-0 overflow-hidden">
        <span
          ref={sweepRef}
          className="absolute left-[-120%] top-0 w-full h-full
          bg-linear-to-r from-transparent via-white/40 to-transparent
          transition-all duration-700 group-hover:left-full"
        />
      </span>

      <span className="relative z-10">{children}</span>
    </button>
  );
});

GlowingButton.displayName = "GlowingButton";

export default GlowingButton;
