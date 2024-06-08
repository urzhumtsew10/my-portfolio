import { FC, useState } from "react";
import "../Portfolio/Portfolio.scss";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Portfolio: FC<{}> = () => {
  const { t } = useTranslation();
  const projectsList = [
    {
      id: 1,
      img: "project-01.png",
      category: "Fullstack app (CMS)",
      technology: "React.js",
      data: `3 ${t("december")}, 2023`,
      description: `${t("electricStore")}: React/Express/MongoDB.`,
      url: "https://electricity-store.vercel.app/",
    },
    {
      id: 2,
      img: "project-03.png",
      category: "Fullstack app (CMS)",
      technology: "React.ts",
      data: `10 ${t("march")}, 2024`,
      description: `${t("cinema")}: React/NestJS/Firebase.`,
      url: "https://cinema-urzhumtsew.vercel.app/",
    },
    {
      id: 3,
      img: "project-02.png",
      category: "Layout&Landing",
      technology: "Javascript",
      data: `20 ${t("april")}, 2023`,
      description: `${t("chFood")}: HTML/CSS/JS.`,
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
  ];

  const [isSeeAll, setIsSeeAll] = useState(false);

  const showAllProjects = () => {
    setIsSeeAll(true);
  };

  const projectListSlice = isSeeAll ? projectsList : projectsList.slice(0, 3);

  return (
    <div id="portfolio" className="portfolioBlock">
      <div className="portfolioBlock__mainBlock">
        <h2 className="mainBlock__title">{t("portfolio")}</h2>
        {!isSeeAll && (
          <button onClick={showAllProjects} className="mainBlock__btn">
            {t("seeAll")}
          </button>
        )}
      </div>
      <div className="portfolioBlock__myProjects">
        {projectListSlice.map(
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
