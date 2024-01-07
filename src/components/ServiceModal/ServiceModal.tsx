import { FC, useState } from "react";
import "../ServiceModal/ServiceModal.scss";
import icon_close from "../../img/icon-close.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useTranslation } from "react-i18next";

export const ServiceModal: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const { modalService, selectService } = useAppSelector(
    (state) => state.modalReducer
  );
  const dispatch = useAppDispatch();
  const { setModalService, setModalHireMe } = modalSlice.actions;

  const closeServiceModal = () => {
    dispatch(setModalService(false));
    document.body.style.overflow = "inherit";
  };

  const openHireMeModal = () => {
    dispatch(setModalService(false));
    dispatch(setModalHireMe(true));
  };

  return (
    <div className={`serviceModal ${modalService && "active"}`}>
      <div className="serviceModal__modalContent">
        <img
          onClick={closeServiceModal}
          className="modalContent__closeImg"
          src={icon_close}
          alt="close"
        />
        <h2 className="modalContent__titleService">{selectService.title}</h2>
        <p className="modalContent__descriptionService">
          {selectService.description}
        </p>
        <a href={`${selectService.url}`} target="_black">
          <button className="modalContent__exampleBtn">{t("example")}</button>
        </a>
        <button onClick={openHireMeModal} className="modalContent__hireMeBtn">
          {t("hireMe")}
        </button>
      </div>
    </div>
  );
};
