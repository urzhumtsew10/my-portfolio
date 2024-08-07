import { FC, useEffect, memo } from "react";
import { useTranslation } from "react-i18next";
import "../Main/Main.scss";
import my_photo from "../../img/my-photo02.png";
import ellipse from "../../img/ellipse.svg";
import { ReactComponent as Arrow } from "../../img/arrow.svg";
import Services from "../Services/Services";
import { Skills } from "../Skills/Skills";
import { HireMe } from "../HireMe/HireMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Ticker } from "../Ticker/Ticker";
import { ProjectIdea } from "../ProjectIdea/ProjectIdea";
import { HireMeModal } from "../HireMeModal/HireMeModal";
import { useAppDispatch } from "../../store/hooks";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { ServiceModal } from "../ServiceModal/ServiceModal";
import { Link } from "react-scroll";

const Main: FC<{}> = () => {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const { setModalHireMe } = modalSlice.actions;

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

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

  const { t } = useTranslation();

  return (
    <main>
      <section id="home" className="mainSection">
        <div className="mainSection__greeting">
          <span className="greeting__text">Hello!</span>
        </div>
        <div className="mainSection__aboutMe">
          <h1 className="aboutMe__title">
            {t("I")} <span className="title__span">{t("name")}</span>,{" "}
            <p>{t("developer")}</p>
          </h1>
        </div>
        <div id="home" className="mainSection__myImage">
          <img className="myImage__photo" src={my_photo} alt="my photo" />
          <img className="myImage__ellipse" src={ellipse} alt="ellipse" />
          <div className="myImage__actionsBlock">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button
                onClick={changeSelectedPage}
                className="actionsBlock__btn"
              >
                <span className="actionsBlock__buttonText">
                  {t("portfolio")}
                </span>
                <Arrow className="actionsBlock__img" />
              </button>
            </Link>
            <span onClick={openHireMeModal} className="actionsBlock__text">
              {t("hireMe")}
            </span>
          </div>
        </div>
        <div className="mainSection__notation">
          <p className="notation__text">{t("notationText")}</p>
        </div>
        <div className="mainSection__myExperience">
          <p className="myExperience__aboutExperience">3 {t("years")}</p>
          <p className="aboutExperience__span">{t("experience")}</p>
        </div>
      </section>
      <Services />
      <Skills />
      <HireMe />
      <Portfolio />
      <Ticker />
      <ProjectIdea />
      <HireMeModal />
      <ServiceModal />
      {/* <SwitcherLng /> */}
    </main>
  );
};

export default memo(Main);
