import React, {
  BaseSyntheticEvent,
  FC,
  RefObject,
  useRef,
  useState,
} from "react";
import "../Header/Header.scss";

const Header: FC<{}> = () => {
  const [selectPage, setSelectPage] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const changeSelectedPage = (event: BaseSyntheticEvent) => {
    const namePage: string = event.target.innerText;
    setSelectPage(namePage.toLowerCase());
  };

  const toggleBurgerMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
  };

  const scrollToSection = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = "inherit";
  };

  return (
    <header className="header">
      <div className="header__controlBlock">
        <div className={`controlBlock__hoverPage ${selectPage}`}></div>
        <ul className="controlBlock__leftList">
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Home
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            About
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Service
          </li>
        </ul>
        <div className="header__logo">AU</div>
        <ul className="controlBlock__rightList">
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            Resume
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="rightList__item"
          >
            Project
          </li>
          <li
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
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            Home
          </p>
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            About
          </p>
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            Service
          </p>
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            Resume
          </p>
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            Project
          </p>
          <p onClick={scrollToSection} className="mobileHeaderContent__item">
            Contact
          </p>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
