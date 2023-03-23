import "./App.scss";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./views/home/Home";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useRef, useState } from "react";
import Foot from "./components/footer/Foot";
import Player from "./views/player/Player";
import Players from "./views/players/Players.jsx";
import Top from "./functions/scrolltop/Top";
import Vidoes from "./views/videos/Videos";
function App() {
  const ToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [top, setTop] = useState(false);
  const Topbtn = () => {
    if (window.scrollY >= 80) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  window.addEventListener("scroll", Topbtn);

  return (
    <Router basename="/Ahly">
      <div className="App">
        <Top />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/player">
            <Route path=":url" element={<Player />} />
          </Route>
          <Route path="/videos" element={<Vidoes />} />
        </Routes>
        <div className={top ? "totop active" : "totop"} onClick={ToTop}>
          <AiOutlineArrowUp />
        </div>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
