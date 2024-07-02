import { FC, useEffect, useState } from "react";
import "../HireMe/HireMe.scss";
import my_photo from "../../img/my-photo02.png";
import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const HireMe: FC<{}> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { setModalHireMe } = modalSlice.actions;

  const { ref: achivesRef, inView: achivesIsVisible } = useInView();
  const [isStartedAnim, setIsStartedAnim] = useState(false);

  const openHireMeModal = () => {
    dispatch(setModalHireMe(true));
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (achivesIsVisible) {
      setIsStartedAnim(true);
    }
  }, [achivesIsVisible]);

  return (
    <section id="hire" className="hireMeBlock">
      <div className="hireMeBlock__blockMyPhoto">
        <img className="blockMyPhoto__img" src={my_photo} alt="my photo" />
      </div>
      <div className="hireMeBlock__blockMyInfo">
        <h2 className="blockMyInfo__title">
          {t("why")}{" "}
          <span className="blockMyInfo__title__span">{t("hireMe")}</span>?
        </h2>
        <p className="blockMyInfo__text">{t("hireText")}</p>
        <div ref={achivesRef} className="blockMyInfo__achievement">
          <div className="achievement">
            <h2 className="achievement__count">
              {isStartedAnim && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h2>
            <p className="achievement__name">{t("project")}</p>
          </div>
          <div className="achievement">
            <h2 className="achievement__count">
              {isStartedAnim && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h2>
            <p className="achievement__name">{t("clients")}</p>
          </div>
        </div>
        <button onClick={openHireMeModal} className="blockMyInfo__btn">
          {t("hireMe")}
        </button>
      </div>
    </section>
  );
};
