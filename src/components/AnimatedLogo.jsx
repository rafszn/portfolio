import { Link } from "react-router-dom";

const AnimatedLogo = () => {
  return (
    <Link to={"/"} className="animated-logo">
      <div className="bars">
        <div className="bar bg-[#E0695F]" />
        <div className="bar bg-[#F4BF4E]" />
        <div className="bar bg-[#69B457]" />
        <div className="bar bg-white bar1" />
      </div>
      <div className="text"><span className="first">Raf</span> <span className="last">Okenyi</span></div>
    </Link>
  );
};
export default AnimatedLogo;
