import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerMark from "../common/FlowerMark";
import soldOutImg from "../../assets/soldoutimg.png";

const floorPlans = [
  { title: "Master Plan", sold: false },
  { title: "2 BHK", sold: true },
  { title: "2 BHK (Large)", sold: true },
  { title: "3 BHK", sold: false },
  { title: "3.5 BHK", sold: false },
  { title: "4 BHK", sold: false },
];

const FloorPlansSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { y: 140 });

      gsap.to(contentRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-red-500 py-20 px-5 -mt-16 sm:-mt-20">
      <div ref={contentRef} className="will-change-transform">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center text-white space-y-4">
        <h2 className="gsap-fade-up text-xl sm:text-4xl font-serif text-left">
          Thoughtfully Designed <br/>Floor Plans
        </h2>

        <p className="gsap-fade-up uppercase tracking-wide text-[10px] opacity-90 ">
         <p className="text-right -mb-3 mr-9"> Smart layouts that maximize </p> <br/> space, light, and everyday comfort
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="h-10 pr-8 w-full"
          alt="flowersvg"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {floorPlans.map((plan, index) => (
          <div
            key={index}
            className="gsap-card relative bg-white rounded-2xl p-6 shadow-xl
            transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-black/45 via-gray-600/35 to-black/45 blur-2xl -z-10" />
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.35)_0,transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.28)_0,transparent_50%)] opacity-85 blur-xl -z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-black/20 blur-[2px] select-none pointer-events-none -z-10">
              SOLD
            </div>
            {/* Tag */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 
              bg-gray-100 text-gray-700 px-5 py-1.5 rounded-full text-sm font-bold shadow">
              {plan.title}
            </span>

            {/* Image placeholder with blur */}
            <div className="relative h-40 rounded-xl mb-5 overflow-hidden">
              <div className="relative z-10 h-full flex items-center justify-center">
                {plan.sold ? (
                  <div className="flex items-center justify-center">
                    <img
                      src={soldOutImg}
                      alt="Sold out"
                      className="w-36 sm:w-40 md:w-44 -rotate-6"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <button
                    className="px-6 py-2 rounded-full border border-black
                    text-black bg-white/80 backdrop-blur-sm
                    transition hover:text-white hover:bg-linear-to-r hover:from-red-500 hover:via-rose-500 hover:to-orange-500 hover:border-transparent"
                  >
                    View Plan
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
