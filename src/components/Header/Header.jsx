import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/Logo/logo_travel.png";
import "./header.css";

//Menu Home
const nav__link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const StickHeaderFuc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    StickHeaderFuc();
    return window.removeEventListener("scroll", StickHeaderFuc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div
            className="nav__wrapper d-flex align-items-center 
          justify-content-between"
          >
            {/* ========== Logo ========== */}
            <div className="logo">
              <Link to={"/home"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* =========================== */}

            {/* ========== Menu =========== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__link.map((item, index) => (
                  <li className="nav__items" key={index}>
                    <NavLink
                      to={item.path}
                      className={(NavClass) =>
                        NavClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =========================== */}

            {/* =============Menu Right =========== */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to={"/register"}>Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-fill"></i>
              </span>
            </div>
            {/* =================================== */}
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
