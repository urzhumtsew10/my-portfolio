import React, { BaseSyntheticEvent, FC, useState } from "react";
import "../Header/Header.scss";
import { useAppSelector } from "../../store/hooks";
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
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {t("home")}
            </Link>
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {t("service")}
            </Link>
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
              {t("skill")}
            </Link>
          </li>
        </ul>
        <div className="header__logo">AU</div>
        <ul className="controlBlock__rightList">
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            <Link
              to="hire"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {t("hire")}
            </Link>
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {t("portfolio")}
            </Link>
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {t("contact")}
            </Link>
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
            <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("skill")}
              </p>
            </Link>
            <Link
              to="hire"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("hire")}
              </p>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p
                onClick={(event) => changeSelectedPage(event)}
                className="mobileHeaderContent__item"
              >
                {t("portfolio")}
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
