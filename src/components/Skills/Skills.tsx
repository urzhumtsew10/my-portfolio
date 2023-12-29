import { FC } from "react";
import "../Skills/Skills.scss";
import { SkillCard } from "./SkillCard";
import { useInView } from "react-intersection-observer";

export const Skills: FC<{}> = () => {
  const skillsList = [
    "React.js",
    "Redux toolkit",
    "RTK Query",
    "React Router",
    "React Form",
    "SCSS/CSS",
    "HTML",
    "JavaScript/TypeScript",
    "Express.js",
    "Fetch/Axios",
    "MongoDB/PostgreSQL",
    "Git",
    "OOP",
    "NPM",
    "Postman",
  ];

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="skillsBlock">
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
