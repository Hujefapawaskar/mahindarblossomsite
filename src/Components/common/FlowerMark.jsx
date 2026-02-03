import flowersHero from "../../assets/flowershero.svg";

const FlowerMark = ({
  showLines = true,
  className = "",
  containerClassName = "",
  lineClassName = "h-px w-15 bg-red-300",
  alt = "Flowers",
  loading = "lazy",
}) => {
  if (!showLines) {
    return (
      <img
        src={flowersHero}
        alt={alt}
        loading={loading}
        className={className}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${containerClassName}`.trim()}>
      <span className={lineClassName} />
      <img
        src={flowersHero}
        alt={alt}
        loading={loading}
        className={className}
      />
      <span className={lineClassName} />
    </div>
  );
};

export default FlowerMark;
