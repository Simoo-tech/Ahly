import React from "react";
import "./home.scss";
import Players from "../players/Players.jsx";
import landingVid from "../../assets/vid/landing.mp4";
import Ach from "../achivements/Ach";
import Contact from "../contact/Contact";
export default function Home() {
  return (
    <div id="home">
      <div className="pages">
        <a href="#home" data-page="الرئيسية"></a>
        <a href="#players" data-page="اللاعبون"></a>
        <a href="#achev" data-page="الانجازات"></a>
        <a href="#contact" data-page="تواصل معنا"></a>
      </div>
      <div className="landing mb-5">
        <video src={landingVid} autoPlay muted loop></video>
      </div>
      <Players />
      <Ach />
      <Contact />
    </div>
  );
}
