import { FC, useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const SkillCard: FC<{
  name: string;
}> = ({ name }) => {
  const { ref: skillRef, inView: skillIsVisible } = useInView({
    threshold: 0.5,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (skillIsVisible) {
      setIsVisible(true);
    }
  }, [skillIsVisible]);

  return (
    <div
      ref={skillRef}
      className={`skillsList__skillCard ${isVisible && "active"}`}
    >
      <div className="skillCard__img">
        <div className="imgEllipse"></div>
      </div>
      <p className="skillCard__name">{name}</p>
    </div>
  );
};
