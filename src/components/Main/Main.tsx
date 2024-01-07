import React, { FC, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
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
import { HireMeModal } from "../HireMeModal/HireMeModal";
import { useAppDispatch } from "../../store/hooks";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import { useInView } from "react-intersection-observer";
import { ServiceModal } from "../ServiceModal/ServiceModal";

const Main: FC<{}> = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const dispatch = useAppDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const { setSelectHeaderItem } = headerSlice.actions;

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("home"));
    }
  }, [inView]);

  const openHireMeModal = () => {
    document.body.style.overflow = "hidden";
    dispatch(setModalHireMe(true));
  };

  const changeSelectedPage = () => {
    const coordinatesElem: number | undefined = document
      .querySelector(`#project`)
      ?.getBoundingClientRect().top;

    if (coordinatesElem && window.screen.width > 767) {
      window.scrollTo({
        top: coordinatesElem + window.pageYOffset - 100,
        behavior: "smooth",
      });
    }
    if (window.screen.width < 767 && coordinatesElem) {
      window.scrollTo({
        top: coordinatesElem + window.pageYOffset - 50,
        behavior: "smooth",
      });
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguages = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div id="home" className="mainSection">
      <div className="mainSection__greeting">
        <select
          onChange={(event) => changeLanguages(event)}
          name="language"
          id="landuage"
        >
          <option className="greeting__text" value="en">
            Hello!
          </option>
          <option className="greeting__text" value="ru">
            Привет!
          </option>
          <option className="greeting__text" value="ua">
            Привіт!
          </option>
        </select>
        <img className="greeting__img" src={glow} alt="glow" />
      </div>
      <div className="mainSection__aboutMe">
        <h1 className="aboutMe__title">
          {t("I")} <span className="title__span">{t("name")}</span> , <br />{" "}
          {t("developer")}
        </h1>

        <img className="aboutMe__img" src={glow} alt="glow" />
      </div>
      <div ref={ref} className="mainSection__myImage">
        <img className="myImage__photo" src={my_photo} alt="my photo" />
        <img className="myImage__ellipse" src={ellipse} alt="ellipse" />
        <div className="myImage__actionsBlock">
          <button onClick={changeSelectedPage} className="actionsBlock__btn">
            <p className="actionsBlock__buttonText">{t("portfolio")}</p>
            <img className="actionsBlock__img" src={arrow} alt="arrow" />
          </button>
          <p onClick={openHireMeModal} className="actionsBlock__text">
            {t("hireMe")}
          </p>
        </div>
      </div>
      <div className="mainSection__notation">
        <img className="notation__img" src={commas} alt="commas" />
        <p className="notation__text">{t("notationText")}</p>
      </div>
      <div className="mainSection__myExperience">
        <div className="myExperience__stars">
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
          <img className="stars__img" src={star} alt="star" />
        </div>
        <p className="myExperience__aboutExperience">3 {t("years")}</p>
        <p className="aboutExperience__span">{t("experience")}</p>
      </div>
      <Services />
      <Skills />
      <HireMe />
      <Portfolio />
      <Ticker />
      <ProjectIdea />
      <HireMeModal />
      <ServiceModal />
    </div>
  );
};

export default React.memo(Main);
