import BgImg from "/images/hero_bg.png";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text-container-1">
          <h1 className="hero-text animation-fire-1">My...&nbsp;</h1>
          <h1 className="hero-text animation-fire-2">My...&nbsp;</h1>
          <h1 className="hero-text animation-fire-3">My...</h1>
        </div>
        <div className="hero-text-container-2">
          <h1 className="hero-text-2 animation-fire-4">What&nbsp;</h1>
          <h1 className="hero-text-2 animation-fire-5">A&nbsp;</h1>
          <h1 className="hero-text-2 animation-fire-6">Scene!</h1>
        </div>
        <img className="bg-image" src={BgImg} />
      </div>
    </>
  );
}

export default Hero;
