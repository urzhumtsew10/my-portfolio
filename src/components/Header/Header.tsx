import React, { BaseSyntheticEvent, FC, useState } from "react";
import "../Header/Header.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";

const Header: FC<{}> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { selectHeaderItem } = useAppSelector((state) => state.headerReducer);
  const dispatch = useAppDispatch();
  const { setSelectHeaderItem } = headerSlice.actions;

  const changeSelectedPage = (event: BaseSyntheticEvent) => {
    const namePage: string = event.target.innerText;
    console.log(namePage);
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
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Home
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            Service
          </li>
          <li
            onClick={(event) => changeSelectedPage(event)}
            className="leftList__item"
          >
            About
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
          <p onClick={changeSelectedPage} className="mobileHeaderContent__item">
            Home
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="mobileHeaderContent__item"
          >
            About
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="mobileHeaderContent__item"
          >
            Service
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="mobileHeaderContent__item"
          >
            Resume
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="mobileHeaderContent__item"
          >
            Project
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="mobileHeaderContent__item"
          >
            Contact
          </p>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
