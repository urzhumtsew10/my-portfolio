import { FC, useRef } from "react";
import "../ProjectIdea/ProjectIdea.scss";
import icon_email from "../../img/icon-email.svg";
import icon_award from "../../img/award.svg";
import icon_rating from "../../img/rating.svg";
import icon_shield_tick from "../../img/shield-tick.svg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "../App/App";

export const ProjectIdea: FC<{}> = () => {
  const { t } = useTranslation();
  const inputEmailRef = useRef<HTMLInputElement | null>(null);

  const sendEmail = async () => {
    if (inputEmailRef.current) {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailReg.test(inputEmailRef.current.value)) {
        const res = await axios.post(`${API_URL}/email`, {
          email: inputEmailRef.current.value,
        });
        console.log(res.data);
        inputEmailRef.current.value = "";
        inputEmailRef.current.placeholder = "Enter Email Address";
      } else {
        inputEmailRef.current.value = "";
        inputEmailRef.current.placeholder = "Email is invalid";
      }
    }
  };

  return (
    <section className="projectIdeaBlock">
      <h2 className="projectIdeaBlock__title">
        {t("ideaText")} <br /> {t("idea")}?{" "}
        <span className="projectIdeaBlock__title__span">{t("discuss")}</span>
      </h2>
      <div className="projectIdeaBlock__projectIdea">
        <div className="projectIdea__inputBlock">
          <div className="inputBlock__imgBlock"></div>
          <input
            ref={inputEmailRef}
            className="inputBlock__input"
            type="email"
            placeholder={`${t("enter")} ${t("email")}`}
          />
          <button onClick={sendEmail} className="inputBlock__btn">
            {t("send")}
          </button>
        </div>
        <ul className="projectIdea__blockInfo">
          <li className="blockInfo__content">
            <img className="content__img" src={icon_rating} alt="icon" />
            <p className="content__text">4.9/5 {t("rating")}</p>
          </li>
          <li className="blockInfo__content">
            <img className="content__img" src={icon_award} alt="icon" />
            <p className="content__text">25+ {t("award")}</p>
          </li>
          <li className="blockInfo__content">
            <img className="content__img" src={icon_shield_tick} alt="icon" />
            <p className="content__text">{t("certified")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
