import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerMark from "../common/FlowerMark";
import aboutImg1 from "../../assets/stack1card.png"; // main garden image
import aboutImg2 from "../../assets/stack2card.jpg"; // background overlap image
import sec2Bg from "../../assets/sec2bg.png";

const features = [
  {
    title: "PRIME AND WELL CONNECTED LOCATION",
    desc: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and fully operational metro – ensuring effortless daily travel and high future value.",
  },
  {
    title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
    desc: "Choose from 2, 3 & 4 BHK premium apartments with smart vastu compliant layouts, abundant natural light, and excellent ventilation – crafted for modern families, work-from-home ease, and everyday comfort.",
  },
  {
    title: "WAKE UP TO GREEN, CALM LIVING",
    desc: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of lush gardens with bougainvillea canopies, aromatic and native plantations, and butterfly parks.",
  },
  {
    title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
    desc: "Enjoy 97,000 sq.ft of amenities including clubhouse spaces, swimming pool, skating rink, cricket nets, jogging tracks, indoor badminton courts and more.",
  },
  {
    title: "SUSTAINABLE LIVING",
    desc: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design ensuring lower consumption and eco-friendly living.",
  },
  {
    title: "75+ YEARS OF MAHINDRA TRUST",
    desc: "Developed by Mahindra Lifespaces, part of the Mahindra Group, delivering quality construction, transparency, and timely delivery.",
  },
];
const AboutSection = () => {
  const sectionRef = useRef(null);
  const backImgRef = useRef(null);
  const featureSlotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!backImgRef.current || !featureSlotRef.current) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const mm = window.matchMedia("(min-width: 1024px)");
    if (!mm.matches) return undefined;

    const ctx = gsap.context(() => {
      const getDeltas = () => {
        const backRect = backImgRef.current.getBoundingClientRect();
        const featureRect = featureSlotRef.current.getBoundingClientRect();
        const deltaX = featureRect.left - backRect.left;
        const deltaY = featureRect.top - backRect.top;
        const scaleX = featureRect.width / backRect.width;
        const scaleY = featureRect.height / backRect.height;

        return { deltaX, deltaY, scaleX, scaleY };
      };

      const applyAnimation = () => {
        const { deltaX, deltaY, scaleX, scaleY } = getDeltas();

        gsap.to(backImgRef.current, {
          x: deltaX,
          y: deltaY,
          rotate: 360,
          scaleX,
          scaleY,
          transformOrigin: "center",
          ease: "none",
          scrollTrigger: {
            trigger: featureSlotRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      };

      applyAnimation();
      ScrollTrigger.addEventListener("refreshInit", applyAnimation);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full py-20 overflow-hidden"
      style={{ color: "#212121" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={sec2Bg}
          alt="treebg"
          className="h-full w-full object-cover opacity-45 blur-sm"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 space-y-16 sm:space-y-20">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-5 sm:space-y-6 text-left max-w-full sm:max-w-2xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-start">
            <h2 className="gsap-fade-up text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-700 whitespace-normal sm:whitespace-nowrap">
              <span className="text-red-500">About</span> <span className="text-neutral-700">Mahindra Blossom</span>
            </h2>

            <p className="gsap-fade-up mt-2 sm:mt-3 tracking-widest text-[10px] sm:text-sm text-neutral-800 uppercase text-left max-w-full sm:max-w-2xl italic font-semibold">
              Premium Apartments in Whitefield, Bengaluru
            </p>

            <FlowerMark
              containerClassName="mt-4 text-red-400 justify-start"
              lineClassName="h-px w-16 sm:w-20 md:w-24 bg-red-300"
              className="mx-0"
            />
          </div>

          {/* Paragraphs */}
          <div className="gsap-fade-up space-y-5 sm:space-y-7 text-neutral-900 leading-relaxed text-sm sm:text-base ">
            <p>
              <b>Mahindra Blossom</b> is a thoughtfully designed premium residential
              apartment project in Whitefield, Bangalore, developed by{" "}
              <b>Mahindra Lifespaces</b>, part of the trusted Mahindra Group.
              Known for quality construction, transparency, and sustainable
              development, Mahindra Lifespaces has delivered landmark residential
              communities across India.
            </p>

            <p>
              Strategically located near <b>Hope Farm Junction, Whitefield</b>,
              Mahindra Blossom offers <b>2 BHK, 3 BHK, and 4 BHK</b> luxury apartments
              crafted for modern families, professionals, and long-term investors.
              The project blends urban convenience with green living.
            </p>

            <p>
              With excellent connectivity to <b>ITPL</b>, major tech parks,
              schools, hospitals, shopping hubs, and a fully operational metro
              station, Mahindra Blossom ensures everyday comfort with strong
              investment potential.
            </p>

            <p className="italic font-medium text-black">
              Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed
              by the reliability of a trusted developer.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="gsap-image hidden lg:flex relative justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Back image */}
          <div
            ref={backImgRef}
            className="absolute lg:-top-8 lg:left-25 sm:left-4 sm:w-64 sm:h-90 md:left-14 md:w-80 md:h-110 w-56 h-80 rounded-3xl overflow-hidden shadow-xl -rotate-10 z-0"
          >
            <img
              src={aboutImg2}
              alt="Background image of Mahindra Blossom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Front image */}
          <div className="relative w-70 h-96 sm:w-90 sm:h-120 md:w-100 md:h-130 rounded-3xl overflow-hidden shadow-2xl ">
            <img
              src={aboutImg1}
              alt="Front image of Mahindra Blossom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        </div>

        {/* MOBILE IMAGES (between headings) */}
        <div className="lg:hidden flex flex-col gap-4 sm:gap-5 items-center relative">
          <div className="w-full max-w-sm sm:max-w-md h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={aboutImg1}
              alt="Mahindra Blossom exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full max-w-sm sm:max-w-md h-66 sm:h-64 rounded-3xl overflow-hidden shadow-xl origin-top-right -rotate-3deg sm:rotate-[-4deg] translate-x-2 sm:translate-x-3 absolute -z-1 right-5 bottom-10 ">
            <img
              src={aboutImg2}
              alt="Mahindra Blossom landscape"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT IMAGE */}
          <div className="hidden lg:flex justify-start mt-15">
            <div
              ref={featureSlotRef}
              className="w-70 sm:w-85 md:w-105 lg:h-150 rounded-3xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-5 sm:space-y-6 text-left max-w-full sm:max-w-3xl mx-auto  relative lg:right-35 lg:w-180">
            {/* Heading */}
            <div className="text-left">
              <h2 className="gsap-fade-up text-xl sm:text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-gray-700 whitespace-normal sm:whitespace-nowrap lg:text-center">
                Features <span>&#167;</span> <span className="text-red-500">Highlights</span>
              </h2>

              <p className="gsap-fade-up mt-2 tracking-widest uppercase text-[10px] sm:text-sm text-gray-700 max-w-full sm:max-w-3xl font-bold italic text-left lg:text-center">
                Why Buy a Home at Mahindra Blossom
              </p>

              <FlowerMark
                containerClassName="mt-3 text-red-400 justify-start"
                lineClassName="h-px w-24 bg-red-300"
                className="h-10 w-fit"
              />
            </div>

            {/* Feature List */}
            <div className="space-y-5 max-w-4xl font-semibold">
              {features.map((item, index) => (
                <div key={index} className="gsap-card flex gap-3 text-left">
                  <span className="text-red-400 mt-1">🌸</span>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.title}
                    </h4>

                    <p className="text-gray-700 text-sm leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
