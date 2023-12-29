import { FC } from "react";
import arrow from "../../img/arrow.svg";

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
    <div className="myProject__projectCard">
      <div className="projectCard__projectImg">
        <img
          className="projectImg__img"
          src={require(`../../img/${img}`)}
          alt="photo"
        />
        <button onClick={openProject} className="projectImg__button">
          <img className="button__arrow" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="projectCard__projectCategory">{category}</div>
      <div className="projectCard__projectData">
        <div className="projectData__dataBlock">
          <div className="dataBlock__ellipse"></div>
          <div className="dataBlock__title">{technology}</div>
        </div>
        <div className="projectData__dataBlock">
          <div className="dataBlock__ellipse"></div>
          <div className="dataBlock__title">{data}</div>
        </div>
      </div>
      <h3 className="projectData__info">{description}</h3>
    </div>
  );
};
