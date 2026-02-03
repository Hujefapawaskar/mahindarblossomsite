import virtualTourImg from "../../assets/footerimg.jpg";
import PlayButton from "../common/PlayBtn";

const FooterTourSection = () => {
  return (
    <footer id="site-footer" className="bg-red-500 pt-24 pb-10 px-4 sm:px-6 mt-16">
      {/* Virtual Tour Card */}
      <div className="gsap-image max-w-5xl mx-auto -mt-40 mb-20">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={virtualTourImg}
            alt="Virtual Tour"
            loading="lazy"
            decoding="async"
            className="w-full h-50 sm:h-75 md:h-105 object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton />
          </div>

          {/* Text */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white lg:text-3xl sm:text-[2px] font-bold tracking-wide">
            Take The Virtual Tour
          </p>
        </div>
      </div>

      {/* RERA INFO */}
      <div className="gsap-fade-up max-w-7xl mx-auto text-center text-white text-sm space-y-3 px-2">
        <p>
          PROJECT RERA No.: PRM/KA/RERA/1251/446/PR/171225/008348
        </p>

        <p>
          AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-white/30 max-w-6xl mx-auto" />

      {/* Bottom Bar */}
      <div className="gsap-fade-up max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white text-xs gap-4">
        <div className="flex gap-4">
          <button className="hover:underline">Disclaimer</button>
          <span>|</span>
          <button className="hover:underline">Privacy Policy</button>
        </div>

        <p>
          © 2025 Mahindra Blossom. All Rights Reserved
        </p>
      </div>

      {/* Credit */}
      <div className="gsap-fade-up mt-6 text-center text-white/90 text-xs sm:text-sm">
        Website crafted by{" "}
        <a
          href="https://hujefapawaskar.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white underline decoration-white/60 underline-offset-4
          hover:text-white/80 transition"
        >
          Hujefa Pawaskar
        </a>
      </div>
    </footer>
  );
};

export default FooterTourSection;
