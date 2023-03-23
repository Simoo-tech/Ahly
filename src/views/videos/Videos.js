import "./videos.scss";
import vid1 from "../../assets/vid/1.mp4";
import vid2 from "../../assets/vid/2.mp4";
import vid3 from "../../assets/vid/3.mp4";
import vid4 from "../../assets/vid/4.mp4";
import vidImg3 from "../../assets/vid/3vid.jpeg";
import vidImg1 from "../../assets/vid/1vid.jpeg";
import vidImg2 from "../../assets/vid/2vid.jpeg";
import vidImg4 from "../../assets/vid/4vid.jpeg";
import { AiOutlineCloseCircle, AiFillPlayCircle } from "react-icons/ai";
export default function Videos() {
  const playvid = (e) => {
    e.target.parentNode.classList.add("active");
  };
  const close = (e) => {
    window.location.reload(true);
  };
  return (
    <div className="videos pt-5 pb-4">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 video mb-4">
            <img src={vidImg1} alt="" />
            <AiFillPlayCircle className="play" onClick={playvid} />
            <video src={vid1} controls></video>
            <AiOutlineCloseCircle className="close" onClick={close} />
            <div className="text">
              <p>جون الاهلي و صفاقس</p>
              <p>21-22-2020</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 video mb-4 ">
            <img src={vidImg4} alt="" />
            <AiFillPlayCircle className="play" onClick={playvid} />
            <video src={vid2} controls></video>
            <AiOutlineCloseCircle className="close" onClick={close} />
            <div className="text">
              <p>جون القاضية ممكن</p>
              <p>21-22-2020</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 video mb-4 mb-lg-0">
            <img src={vidImg3} alt="" />
            <AiFillPlayCircle className="play" onClick={playvid} />
            <video src={vid3} controls></video>
            <AiOutlineCloseCircle className="close" onClick={close} />
            <div className="text">
              <p>ماتش الاهلي و الهلال</p>
              <p>21-22-2020</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 video mb-4 mb-lg-0 ">
            <img src={vidImg2} alt="" />
            <AiFillPlayCircle className="play" onClick={playvid} />
            <video src={vid4} controls></video>
            <AiOutlineCloseCircle className="close" onClick={close} />
            <div className="text">
              <p>جون ماتش الاهلي و الزمالك </p>
              <p>21-22-2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
