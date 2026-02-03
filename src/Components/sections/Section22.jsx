import featureImg from "../../assets/section22limg.jpg"; // interior image
import FlowerMark from "../common/FlowerMark";

const features = [
  {
    title: "PRIME AND WELL CONNECTED LOCATION",
    desc: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and fully operational metro – ensuring effortless daily travel and high future value."
  },
  {
    title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
    desc: "Choose from 2, 3 & 4 BHK premium apartments with smart vastu compliant layouts, abundant natural light, and excellent ventilation – crafted for modern families, work-from-home ease, and everyday comfort."
  },
  {
    title: "WAKE UP TO GREEN, CALM LIVING",
    desc: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of lush gardens with bougainvillea canopies, aromatic and native plantations, and butterfly parks."
  },
  {
    title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
    desc: "Enjoy 97,000 sq.ft of amenities including clubhouse spaces, swimming pool, skating rink, cricket nets, jogging tracks, indoor badminton courts and more."
  },
  {
    title: "SUSTAINABLE LIVING",
    desc: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design ensuring lower consumption and eco-friendly living."
  },
  {
    title: "75+ YEARS OF MAHINDRA TRUST",
    desc: "Developed by Mahindra Lifespaces, part of the Mahindra Group, delivering quality construction, transparency, and timely delivery."
  }
];

const FeaturesSection = () => {
  return (
    <section
      className="relative bg-pink-50 py-20 overflow-hidden"
      style={{ backgroundColor: "#ffcfd9" }}
    >
      {/* Soft floral texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f4baba_1px,transparent_1px)] bg-size-[22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <div className="w-70 sm:w-85 md:w-105 lg:h-150  rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={featureImg}
              alt="Luxury Interior"
              className="w-full h-full object-cover hover:scale-105 transition duration-700 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          {/* Heading */}
          <div>
            <h2 className="gsap-fade-up md:text-3xl sm:text-xl font-serif font-bold text-gray-700">
              Features   <span>&#167;</span>   <span className="text-red-500">Highlights</span>
            </h2>

            <p className="gsap-fade-up mt-2 tracking-widest uppercase md:text-sm sm:text-[5px] text-gray-500">
              Why Buy a Home at Mahindra Blossom
            </p>

            <FlowerMark
              containerClassName="mt-4 text-red-400"
              lineClassName="h-px w-24 bg-red-300"
              className="h-14 w-full"
            />
          </div>

          {/* Feature List */}
          <div className="space-y-5">
            {features.map((item, index) => (
              <div key={index} className="gsap-card flex gap-3">
                <span className="text-red-400 mt-1">🌸</span>

                <div>
                  <h4 className="font-semibold text-gray-700 text-sm sm:text-base">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
