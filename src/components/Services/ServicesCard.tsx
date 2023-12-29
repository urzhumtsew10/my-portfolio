import { FC } from "react";
import arrow from "../../img/arrow.svg";
import { useInView } from "react-intersection-observer";

export const ServicesCard: FC<{
  img: string;
  title: string;
}> = ({ img, title }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`serviceCardsBlock__serviceCard ${inView && "active"}`}
    >
      <div className="serviceCard__titleCard">{title}</div>
      <div className="serviceCard__lastLayer"></div>
      <div className="serviceCard__middleLayer"></div>
      <div className="serviceCard__frontLayer"></div>
      <div className="serviceCard__frontLayer">
        <img
          className="frontLayer__img"
          src={require(`../../img/${img}`)}
          alt="layout"
        />
      </div>
      <button className="cardButton__btn">
        <img className="cardButton__img" src={arrow} alt="arrow" />
      </button>
    </div>
  );
};
