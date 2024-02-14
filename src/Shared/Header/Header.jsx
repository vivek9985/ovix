import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const navItems = [
  {
    route: "Home",
    submenu: [
      {
        route: "Web Design Agency",
        link: "/",
      },
      {
        route: "Find Developers",
        link: "/",
      },
      {
        route: "Personal Portfolio",
        link: "/",
        type: "gray",
      },
      {
        route: "back",
        type: "gray",
      },
    ],
  },
  {
    route: "Pages",
    submenu: [
      {
        route: "About",
        link: "/",
      },
      {
        route: "Services",
        link: "/",
      },
      {
        route: "Service Details",
        link: "/",
      },
      {
        route: "Team",
        link: "/",
      },
      {
        route: "Team Details",
        link: "/",
      },
      {
        route: "Career",
        link: "/",
      },
      {
        route: "Career Details",
        link: "/",
      },
      {
        route: "FAQ",
        link: "/",
      },
      {
        route: "back",
        type: "gray",
      },
    ],
  },
  {
    route: "Portfolio",
    submenu: [
      {
        route: "Portfolio",
        link: "/",
      },
      {
        route: "Portfolio Details",
        link: "/",
      },
      {
        route: "back",
        type: "gray",
      },
    ],
  },
  {
    route: "Shop",
    submenu: [
      {
        route: "Products",
        link: "/",
      },
      {
        route: "Single Product",
        link: "/",
      },
      {
        route: "Cart",
        link: "/",
      },
      {
        route: "Checkout",
        link: "/",
      },
      {
        route: "back",
        type: "gray",
      },
    ],
  },
  {
    route: "News",
    submenu: [
      {
        route: "News",
        link: "/",
      },
      {
        route: "News Details",
        link: "/",
      },
      {
        route: "back",
        type: "gray",
      },
    ],
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
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentNavItems, setCurrentNavItems] = useState(navItems);

  const handleNavItemChange = (index, route) => {
    if (currentNavItems[index].submenu) {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentNavItems(currentNavItems[index].submenu);
        setShowAnimation(false);
      }, 900);
    } else if (route === "back") {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentNavItems(navItems);
        setShowAnimation(false);
      }, 900);
    }
  };

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
      <ul
        className={`nav-items ${show ? "show show-nav-info" : "hide"}`}
        style={{
          overflowY: `${currentNavItems?.length > 6 ? "scroll" : ""}`,
          paddingTop: `${currentNavItems?.length > 6 ? "150px" : ""}`,
        }}
      >
        {currentNavItems.map((item, index) => (
          <li key={item?.route}>
            <Link
              onClick={() => handleNavItemChange(index, item?.route)}
              to={item?.link ? item?.link : null}
              className={`link ${item?.class} ${
                show ? "fade-up" : "fade-down"
              } ${showAnimation ? "fade-down" : "fade-up"}`}
              style={{
                animationDelay: `${
                  show && !showAnimation
                    ? `${0.3 + index * 0.1}s`
                    : `${(currentNavItems.length - index - 1) * 0.1 + 0.3}s`
                }`,
                color: `${item?.type ? "#666666" : ""}`,
              }}
            >
              {item?.link && <span className="dot"></span>}
              {item?.route}{" "}
              {item?.link ? (
                ""
              ) : (
                <span>
                  <FaArrowRight className="arrow-icon" />
                </span>
              )}
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
          <MdOutlineClose
            className="close-icon"
            onClick={() => {
              setShow(false);
              setTimeout(() => {
                setCurrentNavItems(navItems);
              }, 2000);
            }}
          />
        </div>
        <ul className="contact-info">
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
                  {item?.socials.map((subItem, index) => (
                    <li key={index}>
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
