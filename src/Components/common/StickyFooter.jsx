import { useEffect, useState } from "react";

const IconTimer = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M9 2h6" />
    <path d="M12 9v5l3 2" />
  </svg>
);

const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.32 1.6.58 2.35a2 2 0 0 1-.45 2.11L9.91 10.5a16 16 0 0 0 3.59 3.59l1.32-1.32a2 2 0 0 1 2.11-.45c.75.26 1.54.46 2.35.58A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconDownload = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

import WhatsAppFloating from "./WhatsAppFloating";

const StickyFooter = ({ phoneNumber, brochureText, visitText }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md lg:h-14 transition-opacity duration-300 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 h-full">
          <div className="flex flex-col sm:flex-row items-stretch justify-center text-center overflow-hidden h-full">
            <div className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-0 lg:h-full font-semibold text-xs sm:text-sm leading-none bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg">
              <IconTimer />
              <span>{visitText}</span>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-0 lg:h-full font-semibold text-xs sm:text-sm leading-none bg-gray-600 text-white transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <IconPhone />
              <span>{phoneNumber}</span>
            </a>
            <div className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-0 lg:h-full font-semibold text-xs sm:text-sm leading-none bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg">
              <IconDownload />
              <span>{brochureText}</span>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloating phoneNumber={phoneNumber} />
    </>
  );
};

export default StickyFooter;
