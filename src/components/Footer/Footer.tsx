import { FC } from "react";
import "../Footer/Footer.scss";
import arrow from "../../img/arrow.svg";
import icon_instagram from "../../img/instagram.svg";
import icon_telegram from "../../img/telegram.svg";
import icon_send from "../../img/icon-send.svg";

export const Footer: FC<{}> = () => {
  return (
    <footer className="footer">
      <div className="footer__hireMeBlock">
        <h2 className="hireMeBlock__title">Lets Connect there</h2>
        <button className="hireMeBlock__btn">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue{" "}
            <br />
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur{" "}
            <br />
            adipiscing elit. Sed lobortis orci elementum egestas lobortis
          </p>
          <div className="firstColumn__socialNetworks">
            <a href="https://www.instagram.com/urzhumtsew/" target="_black">
              <img
                className="socialNetworks__img"
                src={icon_instagram}
                alt="icon"
              />
            </a>
            <a href="@urzhumtsew" target="_black">
              <img
                className="socialNetworks__img"
                src={icon_telegram}
                alt="icon"
              />
            </a>
          </div>
        </div>
        <div className="footerInfo__secondColumn">
          <h2 className="secondColumn__title footer_title">Navigation</h2>
          <p className="secondColumn__text  footer_text">Home</p>
          <p className="secondColumn__text  footer_text">Skills</p>
          <p className="secondColumn__text  footer_text">Portfolio</p>
          <p className="secondColumn__text  footer_text">Service</p>
          <p className="secondColumn__text  footer_text">About me</p>
        </div>
        <div className="footerInfo__thirdColumn">
          <h2 className="thirdColumn__title footer_title">Contact</h2>
          <p className="thirdColumn__text footer_text">+91 7738443636</p>
          <p className="thirdColumn__text footer_text">urgumandrei@gmail.com</p>
          <p className="thirdColumn__text footer_text">@urzhumtsew</p>
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
