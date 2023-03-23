import React, { useRef, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Home from "../../views/home/Home";

import { GiHamburgerMenu } from "react-icons/gi";
export default function NavBar() {
  const [nav, setNav] = useState(false);

  const ScrollDown = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", ScrollDown);

  const menu = useRef();
  const menuOpen = () => {
    menu.current.classList.toggle("active");
  };

  return (
    <div className={nav ? "nav active" : "nav"}>
      <div className="container">
        <div className="row">
          <div className="icon col-6 ">
            <GiHamburgerMenu onClick={menuOpen} />
          </div>
          <Link to="/" className="col-6 col-lg-1 logo">
            <img src={logo} alt="" />
          </Link>
          <div className="col-12 col-lg-11 collapse" ref={menu}>
            <ul>
              <li>
                <Link to="/">الصفحة الرئيسية</Link>
              </li>

              <li>
                <Link to="videos">الفيديوهات</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
