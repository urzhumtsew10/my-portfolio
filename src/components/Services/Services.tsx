import React, { FC, useEffect, useRef } from "react";
import "../Services/Services.scss";
import lights from "../../img/lights-yellow.png";
import { ServicesCard } from "./ServicesCard";

const Services: FC<{}> = () => {
  const servicesList = [
    { title: "Layout", img: "layout.png" },
    { title: "Landing page", img: "landing-page.png" },
    { title: "Online store", img: "online-store.png" },
  ];

  return (
    <div className="services__contentServices">
      <img className="contentServices__lights" src={lights} alt="lights" />
      <div className="contentServices__titleBlock">
        <h2 className="titleBlock__titleServices">
          My <span className="titleServices__span">Services</span>
        </h2>
        <p className="titleBlock__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis <br />{" "}
          lacus nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </div>
      <div className="services__serviceCardsBlock">
        {servicesList.map(({ img, title }) => (
          <ServicesCard key={title} img={img} title={title} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Services);
