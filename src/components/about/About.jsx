import { useEffect } from "react";
import "./about.scss";
import img from "../../assets/about.jpg";
import { aboutInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="about section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>about me</h4>
      </div>

      <div className="about__container wrapper">
        <div className="about__left" data-aos="fade-right">
          <div className="about__left-img">
            <img src={img} alt="about" />
          </div>
        </div>
        <div className="about__right" data-aos="zoom-in-up">
          <h2>Hi There ! I'm Edvard Devis</h2>
          <h4>Visual Disagner</h4>
          <p>
            i am Visual Disagner with strong focus on digital brending. Visual
            design seek to attract, inspire, create desires and otivate people
            to respond to message, with a view to making a favorable impact
          </p>
          <div className="about__right-info-container">
            {aboutInfo.map(({ name, detail }) => (
              <div className="about__right-info" key={name}>
                <p>{name}</p>
                <p>: {detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
