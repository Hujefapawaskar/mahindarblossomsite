import FlowerMark from "../common/FlowerMark";
import soldOutImg from "../../assets/soldoutimg.png";

const plans = [
  {
    type: "2 BHK",
    sold: true,
    size: "",
    price: "",
  },
  {
    type: "3 BHK",
    sold: false,
    size: "1800–1850 sq.ft.",
    price: "₹2.18cr Onwards",
  },
  {
    type: "4 BHK",
    sold: false,
    size: "2200–2350 sq.ft.",
    price: "₹2.88cr Onwards",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-red-500 py-20 px-5">
      <div className="max-w-7xl mx-auto text-center text-white space-y-4">
        <h2 className="gsap-fade-up text-xl text-left sm:text-4xl font-serif font-bold lg:text-center">
          Unlock the Door to Affordable Luxury
        </h2>

        <p className="gsap-fade-up uppercase tracking-widest text-[10px] opacity-90 lg:text-xs">
          Explore Apartment Options and Pricing Details Tailored to Your Needs
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="lg:h-15 h-12 w-full"
          alt="flowerdash"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`gsap-card relative bg-[#ffffffe1] rounded-2xl p-8 text-center shadow-xl
            transition-all duration-300 hover:scale-105`}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-gray-500/55 via-gray-400/45 to-gray-700/45 blur-2xl -z-10" />
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {plan.type}
            </h3>

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
              <>
                <p className="text-gray-500 text-sm mb-1">
                  {plan.size}
                </p>

                <p className="font-semibold text-gray-800 mb-5">
                  {plan.price}
                </p>

                <button
                  className="px-6 py-2 rounded-full border border-gray-400
                  text-gray-700 hover:bg-gray-800 hover:text-white transition"
                >
                  Get Quote
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
