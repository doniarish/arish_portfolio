const BgAnimation = () => {
  return (
    <div className="bg-animation">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default BgAnimation;
