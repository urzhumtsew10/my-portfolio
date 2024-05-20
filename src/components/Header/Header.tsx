import React, { BaseSyntheticEvent, FC, useState } from "react";
import "../Header/Header.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import icon_instagram from "../../img/instagram.svg";
import icon_telegram from "../../img/telegram.svg";
import icon_linkedin from "../../img/icon-linkedin.svg";
import icon_github from "../../img/icon-github.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Header: FC<{}> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { t } = useTranslation();

  const { selectHeaderItem } = useAppSelector((state) => state.headerReducer);
  const dispatch = useAppDispatch();
  const { setSelectHeaderItem } = headerSlice.actions;

  const changeSelectedPage = (event: BaseSyntheticEvent) => {
    if (window.screen.width < 767) {
      setIsOpenMenu(false);
      document.body.style.overflow = "inherit";
    }
  };

  const toggleBurgerMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
  };

  return (
    <header className="header">
      <div className="header__controlBlock">
        <div className={`controlBlock__hoverPage ${selectHeaderItem}`}></div>
        <ul className="controlBlock__leftList">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <li
              onClick={(event) => changeSelectedPage(event)}
              className="leftList__item"
            >
              {t("home")}
            </li>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={0} duration={500}>
            <li
              data-section="service"
              onClick={(event) => changeSelectedPage(event)}
              className="leftList__item"
            >
              {t("service")}
            </li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <li
              data-section="about"
              onClick={(event) => changeSelectedPage(event)}
              className="leftList__item"
            >
              {t("about")}
            </li>
          </Link>
        </ul>
        <div className="header__logo">AU</div>
        <ul className="controlBlock__rightList">
          <Link to="resume" spy={true} smooth={true} offset={0} duration={500}>
            <li
              data-section="resume"
              onClick={(event) => changeSelectedPage(event)}
              className="rightList__item"
            >
              {t("resume")}
            </li>
          </Link>
          <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
            <li
              data-section="project"
              onClick={(event) => changeSelectedPage(event)}
              className="rightList__item"
            >
              {t("projects")}
            </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <li
              data-section="contact"
              onClick={(event) => changeSelectedPage(event)}
              className="rightList__item"
            >
              {t("contact")}
            </li>
          </Link>
        </ul>
      </div>
      <div className="header__headerMobile">
        <div
          onClick={toggleBurgerMenu}
          className={`headerMobile__menuBurger ${
            (isOpenMenu && "active") || "unactive"
          }`}
        >
          <span className="menuBurger__span"></span>
        </div>
        <div className="headerMobile__logo">AU</div>
        <h2 className="headerMobile__title">Urzhumtsew</h2>
      </div>
      <div className={`menuMobile ${isOpenMenu && "active"}`}>
        <div className="menuMobile__mobileHeaderContent">
          <div className="mobileHeaderContent__menuList">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("home")}
              </p>
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("service")}
              </p>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("about")}
              </p>
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("resume")}
              </p>
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("projects")}
              </p>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("contact")}
              </p>
            </Link>
          </div>
          <ul className="mobileHeaderContent__networksList">
            <li className="networkList__item">
              <a href="https://www.instagram.com/urzhumtsew/" target="_blank">
                <img
                  className="networksList__itemImg --icon"
                  src={icon_instagram}
                  alt="icon"
                />
              </a>
            </li>
            <li className="networkList__item">
              <a href="https://t.me/urzhumtsew" target="_blank">
                <img
                  className="networksList__itemImg --icon"
                  src={icon_telegram}
                  alt="icon"
                />
              </a>
            </li>
            <li className="networkList__item">
              <a
                href="https://www.linkedin.com/in/andrew-urzhumtsew-843339280/"
                target="_blank"
              >
                <img
                  className="networksList__itemImg"
                  src={icon_linkedin}
                  alt="icon"
                />
              </a>
            </li>
            <li className="networkList__item">
              <a href="https://github.com/urzhumtsew10" target="_blank">
                <img
                  className="networksList__itemImg"
                  src={icon_github}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
