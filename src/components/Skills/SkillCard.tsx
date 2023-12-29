import { FC } from "react";
import { useInView } from "react-intersection-observer";

export const SkillCard: FC<{
  name: string;
  inView: Boolean;
}> = ({ name, inView }) => {
  return (
    <div className={`skillsList__skillCard ${inView && "active"}`}>
      <div className="skillCard__img">
        <div className="imgEllipse"></div>
      </div>
      <p className="skillCard__name">{name}</p>
    </div>
  );
};
