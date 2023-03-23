import React from "react";
import "./player.scss";
import { useParams } from "react-router";
import PLAYERSDATA from "../../PlayerData";
export default function Player() {
  const { url } = useParams();
  const player = PLAYERSDATA.find((play) => play.url === url);
  const { name, image, number, postion, country, born, weight, height } =
    player;
  return (
    <div className="playerData" id="players">
      <div className="container">
        <div className="row">
          <div data-no={number} className="col-12 col-lg-4">
            <img src={image} alt="" />
          </div>
          <div className="text col-12 col-lg-8 ">
            <h1>{name}</h1>
            <span>{postion}</span>
            <ul>
              <li>
                <p> محل الميلاد </p>
                {country}
              </li>
              <li>
                <p>تاريخ الميلاد </p>
                {born}
              </li>
              {weight ? (
                <li>
                  <p> الوزن</p>
                  {weight}
                </li>
              ) : (
                ``
              )}
              <li>
                <p> الطول </p>
                {height}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
