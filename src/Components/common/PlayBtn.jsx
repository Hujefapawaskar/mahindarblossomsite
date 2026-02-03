const PlayButton = () => {
  return (
    <button
      className="group flex items-center justify-center
      w-16 h-16 sm:w-20 sm:h-20 rounded-full
      bg-white/90 backdrop-blur-md
      shadow-xl shadow-black/20
      transition-all duration-300
      hover:scale-110 hover:shadow-2xl hover:bg-white"
    >
      {/* Play Icon */}
      <span
        className="ml-1 w-0 h-0 
        border-t-10 border-b-10 border-l-16
        border-t-transparent border-b-transparent border-l-gray-800
        transition-colors duration-300 group-hover:border-l-red-500"
      />
    </button>
  );
};

export default PlayButton;
