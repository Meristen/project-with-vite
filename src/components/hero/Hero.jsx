import { useEffect } from "react";
import "./hero.scss";
import hero from "../../assets/hero-img.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-up">
          <h3>Hello, i'm</h3>
          <h1>
            Edward <br /> Devis
          </h1>
          <h2>Visual disagner</h2>
          <a href="#" className="btn">
            Click me
          </a>
        </div>

        <div className="hero__right" data-aos="fade-left">
          <div className="hero__right-img">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
