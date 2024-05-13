import "./navbar.scss";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar__container wrapper">
        <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <div className="navbar__links">
          <ul className={`${showNav ? "show" : ""}`}>
            <li onClick={() => setShowNav(false)}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#">About</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#">Resume</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#">Portfolio</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="navbar__phone">
            <FaPhoneAlt />
            <span>+996 704 60 10 05</span>
          </div>
          <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
            {showNav ? <IoMdClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
