import "./intro.css";
import me from "../../images/mypic.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">KANAKA RAJU</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">Designer</div>
            </div>
          </div>
        </div>
        <a className="i-projectBtn" href="#projects">
          PROJECTS
        </a>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img className="i-img" src={me} alt="" />
      </div>
      <svg
        className="i-downArrow"
        xmlns="http://www.w3.org/2000/svg"
        fill="#59b256"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>
  );
};

export default Intro;
