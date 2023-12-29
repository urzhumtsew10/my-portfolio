import { FC } from "react";
import "../ProjectIdea/ProjectIdea.scss";
import icon_email from "../../img/icon-email.svg";
import icon_award from "../../img/award.svg";
import icon_rating from "../../img/rating.svg";
import icon_shield_tick from "../../img/shield-tick.svg";
import { useInView } from "react-intersection-observer";

export const ProjectIdea: FC<{}> = () => {
  return (
    <div className="projectIdeaBlock">
      <h2 className="projectIdeaBlock__title">
        Have an Awsome Project <br /> Idea?{" "}
        <span className="projectIdeaBlock__title__span">Let's Discuss</span>
      </h2>
      <div className="projectIdeaBlock__projectIdea">
        <div className="projectIdea__inputBlock">
          <div className="inputBlock__imgBlock">
            <img className="imgBlock__img" src={icon_email} alt="email" />
          </div>
          <input
            className="inputBlock__input"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="inputBlock__btn">Send</button>
        </div>
        <div className="projectIdea__blockInfo">
          <div className="blockInfo__content">
            <img className="content__img" src={icon_rating} alt="icon" />
            <p className="content__text">4.9/5 Average Ratings</p>
          </div>
          <div className="blockInfo__content">
            <img className="content__img" src={icon_award} alt="icon" />
            <p className="content__text">25+ Winning Awards</p>
          </div>
          <div className="blockInfo__content">
            <img className="content__img" src={icon_shield_tick} alt="icon" />
            <p className="content__text">Certified Product Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
