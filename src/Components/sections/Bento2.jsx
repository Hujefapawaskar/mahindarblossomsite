import FlowerMark from "../common/FlowerMark";

import aromaticGardenImg from "../../assets/bento1/AromaticGarden.png";
import spaciousKitchenImg from "../../assets/bento1/SpKitchen.jpg";
import partyLawnImg from "../../assets/bento1/partyLawn.jpg";
import multipurposeCourtImg from "../../assets/bento1/Multipurpose Court.jpg";
import modernBedroomImg from "../../assets/bento1/modernBedroom.jpg";
import gymImg from "../../assets/bento1/Gym.png";
import cricketNetsImg from "../../assets/bento1/CricketNets.jpg";
import olympicPoolImg from "../../assets/bento1/olympicPool.jpg";
import landscapedGardensImg from "../../assets/bento1/landscapeGarden.png";
import ventilatedFlatsImg from "../../assets/bento1/ventilatedFlats.jpg";
import largeBalconyImg from "../../assets/bento1/LargeBalcony.jpg";
import joggingTrackImg from "../../assets/bento1/joggingPark.png";

const galleryImages = [
  aromaticGardenImg,
  spaciousKitchenImg,
  partyLawnImg,
  multipurposeCourtImg,
  modernBedroomImg,
  gymImg,
  cricketNetsImg,
  olympicPoolImg,
  landscapedGardensImg,
  ventilatedFlatsImg,
  largeBalconyImg,
  joggingTrackImg,
];

const rowOneImages = galleryImages.slice(0, 4);
const rowTwoImages = galleryImages.slice(4, 8);
const rowThreeImages = galleryImages.slice(8, 12);

const GallerySection = () => {
  return (
    <section className="py-20 px-5 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="gsap-fade-up text-xl sm:text-4xl font-serif font-semibold text-gray-600 text-left lg:text-center">
          A <span className="text-red-500">Glimpse</span> of Life at Mahindra Blossom
        </h2>

        <p className="gsap-fade-up uppercase tracking-wide text-[12px] text-gray-500 text-left lg:text-center lg:whitespace-nowrap lg:text-[13px] font-semibold">
          View images of homes, amenities, and{" "}
          <span className="text-right text-[10px] lg:text-center lg:text-[13px]">the surrounding environment</span>
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="h-10 w-full pr-8"
          alt="flowersvg"
        />
      </div>

      {/* Marquee Rows */}
      <div className="max-w-7xl mx-auto space-y-4 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-row marquee-right">
            {rowOneImages.map((img, index) => (
              <div
                key={`row-one-${index}`}
                className="gsap-card relative overflow-hidden rounded-2xl shadow-lg group marquee-item"
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-row marquee-left">
            {rowTwoImages.map((img, index) => (
              <div
                key={`row-two-${index}`}
                className="gsap-card relative overflow-hidden rounded-2xl shadow-lg group marquee-item"
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-row marquee-right">
            {rowThreeImages.map((img, index) => (
              <div
                key={`row-three-${index}`}
                className="gsap-card relative overflow-hidden rounded-2xl shadow-lg group marquee-item"
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
