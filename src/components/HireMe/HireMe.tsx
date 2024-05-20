import { FC } from "react";
import "../HireMe/HireMe.scss";
import my_photo from "../../img/my-photo2.png";
import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useTranslation } from "react-i18next";

export const HireMe: FC<{}> = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { setModalHireMe } = modalSlice.actions;

  const openHireMeModal = () => {
    dispatch(setModalHireMe(true));
    document.body.style.overflow = "hidden";
  };

  return (
    <div id="resume" className="hireMeBlock">
      <div className="hireMeBlock__blockMyPhoto">
        <img className="blockMyPhoto__img" src={my_photo} alt="my photo" />
      </div>
      <div className="hireMeBlock__blockMyInfo">
        <h2 className="blockMyInfo__title">
          {t("why")}{" "}
          <span className="blockMyInfo__title__span">{t("hireMe")}</span>?
        </h2>
        <p className="blockMyInfo__text">{t("hireText")}</p>
        <div className="blockMyInfo__achievement">
          <div className="achievement">
            <h2 className="achievement__count">100+</h2>
            <p className="achievement__name">{t("project")}</p>
          </div>
          <div className="achievement">
            <h2 className="achievement__count">100+</h2>
            <p className="achievement__name">{t("clients")}</p>
          </div>
        </div>
        <button onClick={openHireMeModal} className="blockMyInfo__btn">
          {t("hireMe")}
        </button>
      </div>
    </div>
  );
};
