import { FC } from "react";
import { ReactComponent as Arrow } from "../../img/arrow.svg";

export const ProjectCard: FC<{
  img: string;
  data: string;
  technology: string;
  description: string;
  category: string;
  url: string;
}> = ({ img, category, technology, data, description, url }) => {
  const openProject = () => {
    window.open(url);
  };

  return (
    <div onClick={openProject} className="myProject__projectCard">
      <div className="projectCard__projectImg">
        <img
          className="projectImg__img"
          src={require(`../../img/${img}`)}
          alt="photo"
        />
        <button onClick={openProject} className="projectImg__button">
          <Arrow className="button__arrow" />
        </button>
      </div>
      <div className="projectCard__projectCategory">
        <span className="projectCategory__text">{category}</span>
      </div>
      <div className="projectCard__projectData">
        <div className="projectData__dataBlock">
          <div className="dataBlock__ellipse"></div>
          <span className="dataBlock__title">{technology}</span>
        </div>
        <div className="projectData__dataBlock">
          <div className="dataBlock__ellipse"></div>
          <span className="dataBlock__title">{data}</span>
        </div>
      </div>
      <h3 className="projectData__info">{description}</h3>
    </div>
  );
};
