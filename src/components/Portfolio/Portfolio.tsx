import { FC } from "react";
import "../Portfolio/Portfolio.scss";
import { ProjectCard } from "./ProjectCard";

export const Portfolio: FC<{}> = () => {
  const projectsList = [
    {
      id: 1,
      img: "project-01.png",
      category: "Online Store",
      technology: "React.js",
      data: "3 Dec, 2023",
      description: "Electrical store: React/Express/MongoDB.",
      url: "https://electricity-store.vercel.app/",
    },
    {
      id: 2,
      img: "project-02.png",
      category: "Layout&Landing",
      technology: "JavaScript",
      data: "20 Apr, 2023",
      description: "Chinese food restaurant: HTML/CSS/JavaScript.",
      url: "https://chinese-food.netlify.app/",
    },
    {
      id: 3,
      img: "project-03.png",
      category: "Online store",
      technology: "JavaScript",
      data: "30 Aug, 2023",
      description: "Online store clothes: JScript/Express/MongoDB.",
      url: "https://clothes-frontend-lilac.vercel.app/",
    },
  ];

  return (
    <div className="portfolioBlock">
      <div className="portfolioBlock__mainBlock">
        <h2 className="mainBlock__title">Portfolio</h2>
        <button className="mainBlock__btn">See All</button>
      </div>
      <div className="portfolioBlock__myProjects">
        {projectsList.map(
          ({ id, img, category, technology, data, description, url }) => (
            <ProjectCard
              key={id}
              img={img}
              category={category}
              technology={technology}
              data={data}
              description={description}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
};
