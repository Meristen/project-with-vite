import "./contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { contactInfo } from "../../Data";
import { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="contact section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>contact</h4>
      </div>

      <div className="contact__container wrapper">
        <div className="contact__left" data-aos="fade-right">
          <h3>just say hello</h3>
          <form action="">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="subject" required />
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
              id="#"
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
        <div className="contact__right" data-aos="zoom-in-left">
          <h3>Contact</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            magnam, ipsam rerum culpa soluta ut.
          </p>
          <div className="contact__info-container">
            {contactInfo.map(({ name, info, icon }) => (
              <div className="contact__info-card" key={name}>
                <div className="contact__info-icon">
                  <img src={icon} alt={name} />
                </div>
                <div className="contact__info-text">
                  <h4>{name}</h4>
                  <p>{info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact__copyright">
        2024. disagned by Laralink. All right reserved
      </div>
    </section>
  );
};

export default contact;
