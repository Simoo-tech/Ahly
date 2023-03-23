import React from "react";
import img1 from "../../assets/ali_maloo.jpeg";
import img2 from "../../assets/amr_elsolia.jpeg";
import img4 from "../../assets/hassan_elshahat.jpeg";
import img5 from "../../assets/magdy_afsha.jpeg";
import img6 from "../../assets/mahmoud_3bd_elmn3m.jpeg";
import img7 from "../../assets/mohamed_hany.jpeg";
import img8 from "../../assets/ramy_rabia.jpeg";
import img9 from "../../assets/shnawy.jpeg";
import img10 from "../../assets/yasser_ibrahim.jpeg";
import img11 from "../../assets/dieng.jpeg";
import img12 from "../../assets/mahmoud_metwaly (1).jpeg";
import { Link } from "react-router-dom";

export default function Players() {
  return (
    <section className="players pt-5" id="players">
      <h1>الفريق الاول لنادي الاهلي</h1>
      <div className="container">
        <div className="row goal-keeper">
          <Link to="/player/mohamedelshenawy" className="col-12 player">
            <div data-number="1">
              <img src={img9} alt="" />
            </div>
            <div className="text">
              <h3 className="name">محمد الشناوي </h3>
              <p> حارس مرمي</p>
            </div>
          </Link>
        </div>
        <div className="row defender-player justify-content-between">
          <Link to="/player/alimalol" className="col-2 player">
            <div data-number="21">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <h3 className="name">علي معلول</h3>
              <p> مدافع</p>
            </div>
          </Link>
          <Link to="/player/mohamedmetoly" className="col-2 player">
            <div data-number="4">
              <img src={img12} alt="" />
            </div>
            <div className="text">
              <h3 className="name"> محمود متولي </h3>
              <p> مدافع</p>
            </div>
          </Link>
          <Link to="/player/yasseribrahim" className="col-2 player">
            <div data-number="6">
              <img src={img10} alt="" />
            </div>
            <div className="text">
              <h3 className="name">ياسر ابراهيم </h3>
              <p> مدافع</p>
            </div>
          </Link>
          <Link to="/player/ramyrabea" className="col-2 player">
            <div data-number="5">
              <img src={img8} alt="" />
            </div>
            <div className="text">
              <h3 className="name"> رامي رابيعة</h3>
              <p> مدافع</p>
            </div>
          </Link>
          <Link to="/player/mohamedhany" className="col-2 player">
            <div data-number="30">
              <img src={img7} alt="" />
            </div>
            <div className="text">
              <h3 className="name"> محمد هاني </h3>
              <p> مدافع</p>
            </div>
          </Link>
        </div>
        <div className="row Midfielder justify-content-evenly">
          <Link to="/player/amrelsolia" className="col-3 player">
            <div data-number="17">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <h3 className="name">عمرو السولية </h3>
              <p> خط وسط</p>
            </div>
          </Link>
          <Link to="/player/mohamedmagdy" className="col-3 player">
            <div data-number="19">
              <img src={img5} alt="" />
            </div>
            <div className="text">
              <h3 className="name">(افشة) محمد مجدي</h3>
              <p> خط وسط</p>
            </div>
          </Link>
          <Link to="/player/aleodiang" className="col-3 player">
            <div data-number="15">
              <img src={img11} alt="" />
            </div>
            <div className="text">
              <h3 className="name">أليو ديانج </h3>
              <p> خط وسط</p>
            </div>
          </Link>
        </div>
        <div className="row striker">
          <Link to="/player/mahmoudabdelmnam" className="col-6 player">
            <div data-number="7">
              <img src={img6} alt="" />
            </div>
            <div className="text">
              <h3 className="name">(كهربا) محمود عبد المنعم</h3>
              <p> مهاجم</p>
            </div>
          </Link>
          <Link to="/player/hassenelshahat" className="col-6 player">
            <div data-number="14">
              <img src={img4} alt="" />
            </div>
            <div className="text">
              <h3 className="name">حسين الشحات </h3>
              <p> مهاجم</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
