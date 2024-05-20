import { FC } from "react";
import { useInView } from "react-intersection-observer";

export const SkillCard: FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="skillsList__skillCard">
      <div className="skillCard__img">
        <div className="imgEllipse"></div>
      </div>
      <p className="skillCard__name">{name}</p>
    </div>
  );
};
