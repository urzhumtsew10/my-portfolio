import { FC } from "react";
import icon_star from "../../img/icon-star-02.svg";

export const TickerElement: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <p className="content__title">{title}</p>
      <img className="content__star" src={icon_star} alt="star" />
    </>
  );
};
