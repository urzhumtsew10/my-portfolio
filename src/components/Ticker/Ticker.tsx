import { FC } from "react";
import "../Ticker/Ticker.scss";
import icon_star from "../../img/icon-star-02.svg";
import { TickerElement } from "./TickerElement";
import Marquee from "react-fast-marquee";

export const Ticker: FC<{}> = () => {
  const tickerList = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "Typescript",
    "React.js",
    "Express.js",
    "Redux toolkit",
    "Node.js",
    "Axios",
    "Fetch",
  ];
  return (
    <div className="tickerBlock">
      <div className="tickerBlock__ticker">
        <Marquee speed={110}>
          <div className="ticker__content">
            <div className="content__element">
              <img className="content__star" src={icon_star} alt="star" />
              {tickerList.map((title) => (
                <TickerElement key={title} title={title} />
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};
