import railingsImg from "../../assets/specpics/railings.jpg";
import wallsImg from "../../assets/specpics/walls.jpg";
import sanitaryImg from "../../assets/specpics/cpsanitary.png";
import floorFinishesImg from "../../assets/specpics/floorFinishes.jpg";
import FlowerMark from "../common/FlowerMark";
import locationMapImg from "../../assets/specpics/MapLocation.png";

const specs = [
  {
    title: "Doors, Windows & Railings",
    img: railingsImg,
    points: [
      "uPVC windows, balcony with SS & glass railing",
      "Main door – interior & exterior laminated flush door shutter",
      "Balcony & utility – uPVC door",
      "Smart door locks",
    ],
  },
  {
    title: "Walls",
    img: wallsImg,
    points: [
      "Living, dining, bedrooms, kitchen – emulsion paint",
      "External paint for weather finish",
      "MS grills for balconies",
    ],
  },
  {
    title: "CP & Sanitary Fittings",
    img: sanitaryImg,
    points: [
      "Chromium plated fittings of reputed make",
    ],
  },
  {
    title: "Floor Finishes",
    img: floorFinishesImg,
    points: [
      "Large vitrified tiles in living & dining",
      "Anti-skid ceramic tiles in bathrooms & utility",
      "Balcony & utility – uPVC door",
      "Smart door locks",
    ],
  },
];

const SpecsLocationSection = () => {
  return (
    <section className="px-4 sm:px-6 bg-white mt-8 sm:mt-12 lg:mt-0 mb-16">
      {/* SMART SPECIFICATIONS */}
      <div className="max-w-7xl mx-auto hidden lg:block">
        <div className="text-center mb-10 sm:mb-12 space-y-2 sm:space-y-3">
          <h2 className="gsap-fade-up text-3xl sm:text-5xl font-serif font-bold text-gray-700">
            Smart Specifications
          </h2>

          <p className="gsap-fade-up uppercase tracking-widest text-xs sm:text-base text-gray-500 italic font-semibold">
            Where Quality Meets Functionality
          </p>

          <FlowerMark
            containerClassName="mt-4 text-red-400"
            lineClassName="h-px w-15 bg-red-300"
            className="h-14 w-full "
            alt="flowersvg"
          />
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, index) => (
            <div
              key={index}
              className="gsap-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-52 sm:h-56 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="font-serif uppercase text-center text-gray-700 text-sm font-bold">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-base text-gray-600">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      🌸 <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION SECTION */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="gsap-fade-up space-y-4 order-1 lg:order-0">
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-gray-700">
            A Perfect <span className="text-red-500">Location</span>
          </h2>

          <p className="uppercase tracking-widest text-[10px] sm:text-base text-gray-500">
            Everything You Need, Just Minutes Away
          </p>

          <div className="flex items-center gap-3 text-red-400 my-4">
            <FlowerMark
              showLines={false}
              className="hero-item w-80 sm:w-56 md:w-72 lg:w-80 h-auto mask-b-from-0%"
              alt="Flowers"
            />
          </div>

          {/* Map (mobile only) */}
          <div className="gsap-image w-full rounded-2xl overflow-hidden shadow-xl lg:hidden">
            <img
              src={locationMapImg}
              alt="Location Map"
              className="w-full h-72 sm:h-80 object-cover p-6"
              loading="lazy"
            />
          </div>

          <ul className="space-y-3 text-gray-600 text-base pb-5">
            <li className="flex gap-2">
              🌸 Abutting Hopefarm Channasandra Metro Station
            </li>
            <li className="flex gap-2">
              🌸 Key terminals within 13km radius – Whitefield railway station & Hopefarm bus stop
            </li>
            <li className="flex gap-2">
              🌸 Major IT parks within 2.5km radius – ITPL, new Google office
            </li>
            <li className="flex gap-2">
              🌸 Social infrastructure within 3km – schools, colleges, hospitals etc.
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="gsap-image w-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-0 hidden lg:block">
          <img
            src={locationMapImg}
            alt="Location Map"
            className="w-full h-72 sm:h-80 md:h-96 lg:h-112 object-cover p-6 sm:p-10"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecsLocationSection;
