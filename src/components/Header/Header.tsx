import React, { BaseSyntheticEvent, FC, useState } from "react";
import "../Header/Header.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import icon_instagram from "../../img/instagram.svg";
import icon_telegram from "../../img/telegram.svg";
import icon_linkedin from "../../img/icon-linkedin.svg";
import icon_github from "../../img/icon-github.svg";
import { useTranslation } from "react-i18next";

const Header: FC<{}> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { t } = useTranslation();

  const { selectHeaderItem } = useAppSelector((state) => state.headerReducer);
  const dispatch = useAppDispatch();
  const { setSelectHeaderItem } = headerSlice.actions;

  const changeSelectedPage = (event: BaseSyntheticEvent) => {
    const namePage: string = event.target.dataset.section;
    dispatch(setSelectHeaderItem(namePage.toLowerCase()));

    const coordinatesElem: number | undefined = document
      .querySelector(`#${namePage.toLowerCase()}`)
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
          <li
            data-section="home"
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Home
          </li>
          <li
            data-section="service"
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Service
          </li>
          <li
            data-section="about"
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            About
          </li>
        </ul>
        <div className="header__logo">AU</div>
        <ul className="controlBlock__rightList">
          <li
            data-section="resume"
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            Resume
          </li>
          <li
            data-section="project"
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            Project
          </li>
          <li
            data-section="contact"
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            Contact
          </li>
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
            <p
              data-section="home"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("home")}
            </p>
            <p
              data-section="about"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("about")}
            </p>
            <p
              data-section="service"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("service")}
            </p>
            <p
              data-section="resume"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("resume")}
            </p>
            <p
              data-section="project"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("projects")}
            </p>
            <p
              data-section="contact"
              onClick={(event) => changeSelectedPage(event)}
              className="mobileHeaderContent__item"
            >
              {t("contact")}
            </p>
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
