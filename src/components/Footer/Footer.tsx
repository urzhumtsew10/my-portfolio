import { BaseSyntheticEvent, FC, useRef } from "react";
import "../Footer/Footer.scss";
import arrow from "../../img/arrow.svg";
import icon_instagram from "../../img/instagram.svg";
import icon_telegram from "../../img/telegram.svg";
import icon_linkedin from "../../img/icon-linkedin.svg";
import icon_github from "../../img/icon-github.svg";
import icon_send from "../../img/icon-send.svg";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useAppDispatch } from "../../store/hooks";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "../App/App";
import { Link } from "react-scroll";

export const Footer: FC<{}> = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const { setSelectHeaderItem } = headerSlice.actions;

  const inputEmailRef = useRef<HTMLInputElement | null>(null);

  const sendEmail = async () => {
    if (inputEmailRef.current) {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailReg.test(inputEmailRef.current.value)) {
        const res = await axios.post(`${API_URL}/email`, {
          email: inputEmailRef.current.value,
        });
        inputEmailRef.current.value = "";
        inputEmailRef.current.placeholder = "Enter Email Address";
      } else {
        inputEmailRef.current.value = "";
        inputEmailRef.current.placeholder = "Email is invalid";
      }
    }
  };

  const openHireMeModal = () => {
    dispatch(setModalHireMe(true));
    document.body.style.overflow = "hidden";
  };

  const changeSelectedPage = (event: BaseSyntheticEvent) => {
    const namePage: string = event.target.innerText;
    dispatch(setSelectHeaderItem(namePage.toLowerCase()));

    const coordinatesElem: number | undefined = document
      .querySelector(`#${namePage.toLowerCase()}`)
      ?.getBoundingClientRect().top;

    if (coordinatesElem) {
      window.scrollTo({
        top: coordinatesElem + window.pageYOffset - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer__hireMeBlock">
        <h2 className="hireMeBlock__title">{t("connect")}</h2>
        <button onClick={openHireMeModal} className="hireMeBlock__btn">
          {t("hireMe")}
          <img className="btn__arrow" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="footer__footerInfo">
        <div className="footerInfo__firstColumn">
          <div className="firstColumn__logo">
            <div className="logo">AU</div>
            <span className="logo__text">Urzhumtsew</span>
          </div>
          <p className="firstColumn__text">{t("footerText")}</p>
          <ul className="firstColumn__socialNetworks">
            <li>
              <a href="https://www.instagram.com/urzhumtsew/" target="_blank">
                <img
                  className="socialNetworks__img"
                  src={icon_instagram}
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/urzhumtsew" target="_blank">
                <img
                  className="socialNetworks__img"
                  src={icon_telegram}
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/andrew-urzhumtsew-843339280/"
                target="_blank"
              >
                <img
                  className="socialNetworks__img --icon"
                  src={icon_linkedin}
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/urzhumtsew10" target="_blank">
                <img
                  className="socialNetworks__img --icon"
                  src={icon_github}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerInfo__secondColumn">
          <h2 className="secondColumn__title footer_title">
            {t("navigation")}
          </h2>
          <ul className="secondColumn__navList">
            <li className="secondColumn__text  footer_text">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="secondColumn__text  footer_text">
              {" "}
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li className="secondColumn__text  footer_text">
              {" "}
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="secondColumn__text  footer_text">
              {" "}
              <Link
                to="hire"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Hire Me
              </Link>
            </li>
            <li className="secondColumn__text  footer_text">
              {" "}
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerInfo__thirdColumn">
          <h2 className="thirdColumn__title footer_title">{t("contact")}</h2>
          <ul className="thirdColumn__socialList">
            <li className="socialList__item">
              <a className="footer_text" href="mailto: urgumandrei@gmail.com">
                urgumandrei@gmail.com
              </a>
            </li>
            <li className="socialList__item">
              <a
                className="footer_text"
                href="https://t.me/urzhumtsew"
                target="_black"
              >
                telegram
              </a>
            </li>
            <li className="socialList__item">
              <a
                className="footer_text"
                href="https://www.instagram.com/urzhumtsew/"
                target="_black"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footerInfo__fourthColumn">
          <h2 className="fourthColumn__title footer_title">{t("info")}</h2>
          <div className="fourthColumn__footerInputBlock">
            <input
              ref={inputEmailRef}
              className="footerInputBlock__input"
              type="email"
              placeholder={`${t("email")}`}
            />
            <button
              onClick={sendEmail}
              className="footerInputBlock__btn"
            ></button>
          </div>
        </div>
      </div>
      <div className="footer__textBlock">
        <span className="textBlock__text">
          Copyright© 2023 Jayesh. All Rights Reserved.
        </span>
        <span className="textBlock__text">
          User Terms & Conditions | Privacy Policy
        </span>
      </div>
    </footer>
  );
};
