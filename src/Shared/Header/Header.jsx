import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const navItems = [
  {
    route: "Home",
  },
  {
    route: "Pages",
    link: "/",
  },
  {
    route: "Portfolio",
    link: "/",
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

const contactItmes = [
  {
    title: "Brief us",
    para_one: "hello@ovix.com",
    para_two: "Tel. +53 325 356 623",
    socials: [],
  },
  {
    title: "Our Office",
    para_one: "72 Oceanview Drive Los Angeles,",
    para_two: "CA 90045 USA",
    socials: [],
  },
  {
    title: "Follow us",
    para_one: "",
    para_two: "",
    socials: [
      {
        route: "Behance",
        link: "/",
      },
      {
        route: "Dribble",
        link: "/",
      },
      {
        route: "Instagram",
        link: "/",
      },
    ],
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

      {/* dropdown menu */}
      <ul className={`nav-items ${show ? "show show-nav-info" : "hide"}`}>
        {navItems.map((item, index) => (
          <li key={item?.route}>
            <Link
              to={item?.link}
              className={`link ${item?.class} ${
                show ? "fade-up" : "fade-down"
              }`}
              style={{
                animationDelay: `${
                  show
                    ? `${0.3 + index * 0.1}s`
                    : `${(navItems.length - index - 1) * 0.1 + 0.3}s`
                }`,
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
        className={`contact-info-container ${
          show ? "show show-contact-info" : "hide"
        }`}
      >
        <div className="close-btn">
          <MdOutlineClose className="close-icon"
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
        <ul>
          {contactItmes.map((item, index) => (
            <li
              key={index}
              className={`contact-info-content ${show ? "visible" : "hidden"}`}
              style={{
                animationDelay: `${
                  show
                    ? `${0.3 + index * 0.1}s`
                    : `${(navItems.length - index - 1) * 0.1 + 0.3}s`
                }`,
              }}
            >
              <div>
                <h2>{item?.title}</h2>
                <p>{item?.para_one}</p>
                <p>{item?.para_two}</p>
                <ul className="socials">
                  {item?.socials.map((subItem) => (
                    <li>
                      <FaArrowRight className="arrow" />
                      <Link className="social-links">{subItem?.route}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
