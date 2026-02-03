import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import HeroSection from "./Components/sections/HeroSection";
import Section2 from "./Components/sections/Section2";
import Roomtags from "./Components/sections/Roomtags";
import ScrollToTopButton from "./Components/common/ScrollToTopButton";
import Bento1 from "./Components/sections/Bento1";
import Bento2 from "./Components/sections/Bento2";
import SoldTags from "./Components/sections/SoldTags";
import MapandSpec from "./Components/sections/MapandSpec";
import FooterSection from "./Components/sections/FooterSection";

const App = () => {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1,
      syncTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.set(".gsap-fade-up", { opacity: 0, y: 24 });
      gsap.set(".gsap-card", { opacity: 0, y: 30, scale: 0.98 });
      gsap.set(".gsap-image", { opacity: 0, scale: 0.98 });

      ScrollTrigger.batch(".gsap-fade-up", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
          }),
      });

      ScrollTrigger.batch(".gsap-card", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
          }),
      });

      ScrollTrigger.batch(".gsap-image", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
          }),
      });
    });

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <HeroSection />
      <Section2 />
      <Roomtags />
      <Bento1 />
      <SoldTags />
      <Bento2 />
      <MapandSpec />
      <ScrollToTopButton />
      <FooterSection />
    </>
  );
};

export default App;
