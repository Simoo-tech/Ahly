import React from "react";
import "./foot.scss";
import logo from "../../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineCopyright,
} from "react-icons/ai";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={logo} alt="" />
          </div>
          <div className="col-12 links">
            <a
              href="https://www.facebook.com/Officialahlysc/?mibextid=ZbWKwL"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              href="https://twitter.com/AlAhly?t=0W-8SgQeiJdz4H94MEKiwQ&s=35"
              target="_blank"
            >
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.instagram.com/alahlyegypt/" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="https://youtube.com/@Alahly" target="_blank">
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <div className="">
          <AiOutlineCopyright />
          <p>Made by Salah Edlin Mahmoud and his team </p>
        </div>
      </div>
    </div>
  );
}
