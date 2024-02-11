import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const navItems = [
  {
    route: "Home",
    link: "/",
    delay: 0.4,
  },
  {
    route: "Pages",
    link: "/",
    delay: 0.5,
  },
  {
    route: "Portfolio",
    link: "/",
    delay: 0.6,
  },
  {
    route: "Shop",
    link: "/",
  },
  {
    route: "News",
    link: "/",
  },
  {
    route: "Contact",
    link: "/",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="main-menu">
      <div className="menu-left-content">
        <img src={logo} alt="logo" />
        <div
          className="nav-icon"
          onClick={() => {
            setShow(true);
          }}
        >
          <div className="line"></div>
          <div className="line line-two"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="menu-right-content">
        <button className="download-btn">DOWNLOAD CV</button>
      </div>
      <ul className={`nav-items ${show ? "show" : "hide"}`}>
        {navItems.map((item) => (
          <li key={item?.route}>
            <Link
              to={item?.link}
              className={`link ${show ? "fade-up" : "fade-down"}`}
              style={{
                "transition-delay": ` ${item?.delay}`,
              }}
            >
              {item?.route}{" "}
              <span>
                <FaArrowRight className="arrow-icon" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`contact-info ${show ? "show show-contact-info" : "hide"}`}
      >
        <div
          className="close-btn"
          onClick={() => {
            setShow(false);
          }}
        >
          <MdOutlineClose />
        </div>
        <h2>Brief us</h2>
        <p>hello@ovix.com</p>
        <p>Tel. +53 325 356 623</p>
        <h2>Our Office</h2>
        <p>72 Oceanview Drive Los Angeles,</p>
        <p>CA 90045 USA</p>
        <h2>Follow us</h2>
        <p>Behance Dribble Instagram</p>
      </div>
    </header>
  );
};

export default Header;
