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
import FlowerMark from "../common/FlowerMark";

const amenities = [
  { title: "Aromatic Garden", img: aromaticGardenImg, big: true },
  { title: "Spacious Kitchen", img: spaciousKitchenImg },
  { title: "Party Lawn", img: partyLawnImg },
  { title: "Multipurpose Court", img: multipurposeCourtImg, wide: true },
  { title: "Modern Bedroom", img: modernBedroomImg },
  { title: "Gym", img: gymImg },
  { title: "Cricket Nets", img: cricketNetsImg },
  { title: "1/2 Olympic Size Pool", img: olympicPoolImg },
  { title: "Landscaped Gardens", img: landscapedGardensImg },
  { title: "Ventilated Flats", img: ventilatedFlatsImg },
  { title: "Large Balcony", img: largeBalconyImg },
  { title: "Jogging Track", img: joggingTrackImg },
];

const AmenitiesBento = () => {
  return (
    <section className="py-20 px-5 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="gsap-fade-up lg:text-3xl lg:text-center text-[17px] sm:text-4xl font-serif font-bold text-gray-700 text-left">
          <span className="text-red-500">Amenities</span> for Every Age,
          <span className="hidden lg:inline"> </span>
          <br className="lg:hidden" />
          Every Mood
        </h2>
        <p className="gsap-fade-up uppercase tracking-widest text-sm text-gray-500 mt-2 text-[12px]">
          Premium amenities that transform your home into a private retreat
        </p>
        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="lg:h-15 h-12 pr-8 w-full"
          alt="flowersvg"
        />
        
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
        {amenities.map((item, i) => (
          <div
            key={i}
            className={`gsap-card
              relative overflow-hidden rounded-2xl shadow-lg group
              ${item.big ? "row-span-2 col-span-1 sm:col-span-2" : ""}
              ${item.wide ? "col-span-1 sm:col-span-2" : ""}
            `}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Center Title on Hover */}
            <p className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-semibold tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesBento;
