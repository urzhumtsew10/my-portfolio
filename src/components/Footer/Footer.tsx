import { BaseSyntheticEvent, FC, useEffect, useState } from "react";
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
import { useInView } from "react-intersection-observer";

export const Footer: FC<{}> = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const dispatch = useAppDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const { setSelectHeaderItem } = headerSlice.actions;

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("contact"));
    }
  }, [inView]);

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
    <footer ref={ref} id="contact" className="footer">
      <div className="footer__hireMeBlock">
        <h2 className="hireMeBlock__title">Lets Connect there</h2>
        <button onClick={openHireMeModal} className="hireMeBlock__btn">
          Hire me <img className="btn__arrow" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="footer__footerInfo">
        <div className="footerInfo__firstColumn">
          <div className="firstColumn__logo">
            <div className="logo">AU</div>
            <p className="logo__text">Urzhumtsew</p>
          </div>
          <p className="firstColumn__text">
            If you are in need of my services contact me on one of these
            networks. Describe clearly and briefly my task, it would not be bad
            to have a layout of the site or 2-3 links to sites that you like. I
            will contact you within two days.
          </p>
          <div className="firstColumn__socialNetworks">
            <a href="https://www.instagram.com/urzhumtsew/" target="_blank">
              <img
                className="socialNetworks__img"
                src={icon_instagram}
                alt="icon"
              />
            </a>
            <a href="https://t.me/urzhumtsew" target="_blank">
              <img
                className="socialNetworks__img"
                src={icon_telegram}
                alt="icon"
              />
            </a>
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
            <a href="https://github.com/urzhumtsew10" target="_blank">
              <img
                className="socialNetworks__img --icon"
                src={icon_github}
                alt="icon"
              />
            </a>
          </div>
        </div>
        <div className="footerInfo__secondColumn">
          <h2 className="secondColumn__title footer_title">Navigation</h2>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="secondColumn__text  footer_text"
          >
            Home
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="secondColumn__text  footer_text"
          >
            About
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="secondColumn__text  footer_text"
          >
            Project
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="secondColumn__text  footer_text"
          >
            Service
          </p>
          <p
            onClick={(event) => changeSelectedPage(event)}
            className="secondColumn__text  footer_text"
          >
            Contact
          </p>
        </div>
        <div className="footerInfo__thirdColumn">
          <h2 className="thirdColumn__title footer_title">Contact</h2>
          <a href="mailto: urgumandrei@gmail.com">
            <p className="thirdColumn__text footer_text">
              urgumandrei@gmail.com
            </p>
          </a>
          <a href="https://t.me/urzhumtsew" target="_black">
            <p className="thirdColumn__text footer_text">@urzhumtsew</p>
          </a>
          <a href="https://www.instagram.com/urzhumtsew/" target="_black">
            <p className="thirdColumn__text footer_text">urzhumtsew</p>
          </a>
        </div>
        <div className="footerInfo__fourthColumn">
          <h2 className="fourthColumn__title footer_title">
            Get the latest information
          </h2>
          <div className="fourthColumn__footerInputBlock">
            <input
              className="footerInputBlock__input"
              type="email"
              placeholder="Email Address"
            />
            <button className="footerInputBlock__btn">
              <img className="btn__img" src={icon_send} alt="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="footer__textBlock">
        <p className="textBlock__text">
          Copyright© 2023 Jayesh. All Rights Reserved.
        </p>
        <p className="textBlock__text">
          User Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};
