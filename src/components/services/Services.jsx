import "./Services.scss";
import { ServicesInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="services section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>services</h4>
      </div>

      <div className="services__container wrapper">
        {ServicesInfo.map(({ name, des, Img }) => (
          <div className="services__card" key={name} data-aos="zoom-out">
            <div className="services__card-img">
              <img src={Img} alt="card" />
            </div>
            <h2>{name}</h2>
            <p>{des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
