import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import toys from "./assets/toys.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="discord-logo" />
        <img src={menu} alt="menu" />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
      </p>
      <div className="btn-container">
        <button id="up-btn">Download for Mac</button>
        <button id="btm-btn">Open Discord in Browser</button>
      </div>
      <div className="toys-img">
        <img src={toys} alt="toys-img"></img>
      </div>
    </div>
  );
}

export default App;
