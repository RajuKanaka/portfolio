import "./About.css";
import pic from "../../images/mypic3.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={pic} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div className="a-disc-bg">
          <p className="a-sub">
            I am a self-taught Web Developer specialized in Design and the
            Front-End Development.
          </p>
          <p className="a-disc">
            A Passionate Front End Developer with experience in developing
            Websites/Apps using JavaScript and Reactjs. Flexible in integrating
            and working with popular libraries and design systems around the
            ReactJS ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
