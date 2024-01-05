import { FC, useEffect } from "react";
import "../Skills/Skills.scss";
import { SkillCard } from "./SkillCard";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";

export const Skills: FC<{}> = () => {
  const skillsList = [
    "React.js",
    "Redux toolkit",
    "RTK Query",
    "React Router",
    "React Form",
    "SCSS/CSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "Express.js",
    "Fetch/Axios",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "OOP",
    "NPM",
    "Postman",
  ];

  const dispatch = useAppDispatch();
  const { setSelectHeaderItem } = headerSlice.actions;

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("about"));
    }
  }, [inView]);

  return (
    <div id="about" className="skillsBlock">
      <h2 className="skillsBlock__title">
        My <span className="skillsBlock__title__span">Skills</span>
      </h2>
      <div ref={ref} className="skillsBlock__skillsList">
        {skillsList.map((name) => (
          <SkillCard key={name} name={name} inView={inView} />
        ))}
      </div>
    </div>
  );
};
