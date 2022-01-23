import "./Project.css";
const Project = ({ name, desc, link, source, image }) => {
  const descArray = desc.split(".");
  return (
    <div className="container">
      <div className="left">
        <div className="name">{name}</div>
        <ul className="desc">
          {descArray.map((e, id) => {
            return <li key={id}>{e + "."}</li>;
          })}
        </ul>
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
