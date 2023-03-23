import React from "react";
import bkmain from "../../assets/playersbk.jpeg";
import cup1 from "../../assets/ko2os/1-removebg-preview.png";
import cup2 from "../../assets/ko2os/2-removebg-preview.png";
import cup3 from "../../assets/ko2os/3-removebg-preview.png";
import cup4 from "../../assets/ko2os/4-removebg-preview.png";
import cup5 from "../../assets/ko2os/5-removebg-preview.png";
import "./ach.scss";
export default function Ach() {
  return (
    <section className="achev mt-5 " id="achev">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 leftSide">
            <div className="col-12 col-md-6 col-lg-2">
              <div className="hover">
                <h6>كاس السوبر الافريقي</h6>
                <div className="imgholder">
                  <img src={cup1} alt="" />
                </div>
              </div>
              <div className="dot"></div>
              <p>8</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="hover">
                <h6>كاس الكونفدرالية </h6>
                <div className="imgholder">
                  <img src={cup2} alt="" />
                </div>
              </div>
              <div className="dot"></div>
              <p>1</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="hover">
                <h6>دورى ابطال افريقيا </h6>
                <div className="imgholder">
                  <img src={cup3} alt="" />
                </div>
              </div>
              <div className="dot"></div>
              <p>10</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="hover">
                <h6>كاس السوبر المصري</h6>
                <div className="imgholder">
                  <img src={cup4} alt="" />
                </div>
              </div>
              <div className="dot"></div>
              <p>12</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="hover">
                <h6>كاس مصر</h6>
                <div className="imgholder">
                  <img src={cup5} alt="" />
                </div>
              </div>
              <div className="dot"></div>
              <p>37</p>
            </div>
          </div>
          <div className="col-12 col-lg-2  rightSide">
            <div>
              <span>110</span>
              <p>بطولات و ألقاب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
