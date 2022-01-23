import "./Project.css";
const Project = ({ name, desc, link, source, image }) => {
  return (
    <div className="container">
      <div className="left">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
        <div className="link">
          <a className="btn" href={link}>
            See live
          </a>
          <a className="btn" href={source}>
            Source
          </a>
        </div>
      </div>
      <div className="right">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Project;
