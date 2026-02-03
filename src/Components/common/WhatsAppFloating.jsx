const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" fill="currentColor">
    <path d="M20.52 3.48A11.86 11.86 0 0012.03 0C5.4 0 .02 5.39.02 12.02c0 2.12.56 4.19 1.62 6.01L0 24l6.1-1.6a11.99 11.99 0 005.93 1.52h.01c6.63 0 12.02-5.39 12.02-12.02 0-3.2-1.25-6.2-3.54-8.42zm-8.5 18.55h-.01a9.9 9.9 0 01-5.04-1.39l-.36-.21-3.62.95.96-3.52-.24-.36a9.94 9.94 0 01-1.52-5.27c0-5.5 4.48-9.98 9.99-9.98a9.9 9.9 0 017.06 2.93 9.9 9.9 0 012.93 7.06c0 5.5-4.48 9.98-9.97 9.98z" />
    <path d="M17.48 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.06-.14-.61-1.47-.84-2.01-.22-.52-.44-.45-.6-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.62 1.12 2.8.14.18 1.93 2.97 4.68 4.15.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.06-.11-.25-.18-.52-.32z" />
  </svg>
);

const WhatsAppFloating = ({ phoneNumber }) => {
  const whatsappNumber = phoneNumber?.replace(/\D/g, "") || "";

  return (
    <a
      href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#"}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-3 bottom-16 sm:right-5 sm:bottom-20 z-50 group whatsapp-float"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
      <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-2xl">
        <IconWhatsApp />
      </span>
    </a>
  );
};

export default WhatsAppFloating;
