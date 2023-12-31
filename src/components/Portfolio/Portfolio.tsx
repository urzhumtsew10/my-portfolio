import { FC, useEffect, useState } from "react";
import "../Portfolio/Portfolio.scss";
import { ProjectCard } from "./ProjectCard";
import { useAppDispatch } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export const Portfolio: FC<{}> = () => {
  const { t } = useTranslation();
  const projectsList = [
    {
      id: 1,
      img: "project-01.png",
      category: "Fullstack app",
      technology: "React.js",
      data: `3 ${t("december")}, 2023`,
      description: `${t("electricStore")}: React/Express/MongoDB.`,
      url: "https://electricity-store.vercel.app/",
    },
    {
      id: 2,
      img: "project-02.png",
      category: "Layout&Landing",
      technology: "JavaScript",
      data: `20 ${t("april")}, 2023`,
      description: `${t("chFood")}: HTML/CSS/JavaScript.`,
      url: "https://chinese-food.netlify.app/",
    },
    {
      id: 3,
      img: "project-03.png",
      category: "Fullstack app",
      technology: "JavaScript",
      data: `30 ${t("august")}, 2023`,
      description: `${t("onlineClothes")}: JScript/Express/MongoDB.`,
      url: "https://clothes-frontend-lilac.vercel.app/",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const dispatch = useAppDispatch();
  const { setSelectHeaderItem } = headerSlice.actions;

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("project"));
    }
  }, [inView]);

  const [isSeeAll, setIsSeeAll] = useState(false);

  const showAllProjects = () => {
    setIsSeeAll(true);
  };

  const projectListSlice = isSeeAll ? projectsList : projectsList.slice(0, 3);

  return (
    <div ref={ref} id="project" className="portfolioBlock">
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
