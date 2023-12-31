import React, { FC, useRef, useState } from "react";
import "../Main/Main.scss";
import glow from "../../img/glow.svg";
import my_photo from "../../img/my-photo.png";
import ellipse from "../../img/ellipse.svg";
import commas from "../../img/commas.svg";
import star from "../../img/icon-star.svg";
import arrow from "../../img/arrow.svg";
import Services from "../Services/Services";
import { Skills } from "../Skills/Skills";
import { HireMe } from "../HireMe/HireMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Ticker } from "../Ticker/Ticker";
import { ProjectIdea } from "../ProjectIdea/ProjectIdea";
import { useInView } from "react-intersection-observer";

const Main: FC<{}> = () => {
  return (
    <div id="home" className="mainSection">
      <div className="mainSection__greeting">
        <p className="greeting__text">Hello!</p>
        <img className="greeting__img" src={glow} alt="glow" />
      </div>
      <div className="mainSection__aboutMe">
        <h1 className="aboutMe__title">
          I'm <span className="title__span">Andrey</span>, <br /> Frontend
          Developer
        </h1>
        <img className="aboutMe__img" src={glow} alt="glow" />
      </div>
      <div className="mainSection__myImage">
        <img className="myImage__photo" src={my_photo} alt="my photo" />
        <img className="myImage__ellipse" src={ellipse} alt="ellipse" />
        <div className="myImage__actionsBlock">
          <button className="actionsBlock__btn">
            <p className="actionsBlock__buttonText">Portfolio</p>
            <img className="actionsBlock__img" src={arrow} alt="arrow" />
          </button>
          <p className="actionsBlock__text">Hire me</p>
        </div>
      </div>
      <div className="mainSection__notation">
        <img className="notation__img" src={commas} alt="commas" />
        <p className="notation__text">
          Exclusively developed websites by me <br /> ensure pleasant use and
          code quality. <br /> Highly Recommended
        </p>
      </div>
      <div className="mainSection__myExperience">
        <div className="myExperience__stars">
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
        </div>
        <p className="myExperience__aboutExperience">3 Years</p>
        <p className="aboutExperience__span">Experience</p>
      </div>
      <Services />
      <Skills />
      <HireMe />
      <Portfolio />
      <Ticker />
      <ProjectIdea />
    </div>
  );
};

export default React.memo(Main);
