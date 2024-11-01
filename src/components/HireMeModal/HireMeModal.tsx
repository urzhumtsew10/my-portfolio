import { FC, useState } from "react";
import "../HireMeModal/HireMeModal.scss";
import icon_close from "../../img/icon-close.svg";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "../App/App";
import { squircle } from "ldrs";

export const HireMeModal: FC<{}> = () => {
  const { modalHireMe } = useAppSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  squircle.register();

  interface HireMeFields {
    name: string;
    userContact: string;
    price: number;
    time: string;
    description: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HireMeFields>();

  const closeHireMeModal = () => {
    dispatch(setModalHireMe(false));
    document.body.style.overflow = "inherit";
    reset();
    setIsSend(false);
  };

  const trySendOrder: SubmitHandler<HireMeFields> = async (data) => {
    setIsLoading(true);
    try {
      setIsSend(true);
      const res = await axios.post(`${API_URL}/order`, data);
      if (res.data) setIsSend(true);
      setTimeout(() => {
        closeHireMeModal();
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { t } = useTranslation();

  return (
    <div className={`hireMeModal ${modalHireMe && "active"}`}>
      <div
        className={`hireMeModal__contentModal ${
          Object.keys(errors)[0] && "error"
        } ${isSend && "success"}`}
      >
        <img
          onClick={closeHireMeModal}
          className="contentModal__imgClose"
          src={icon_close}
          alt="icon close"
        />
        <h2 className="contentModal__title">{t("details")}</h2>
        <form
          onSubmit={handleSubmit(trySendOrder)}
          className="contentModal__hireMeForm"
        >
          <label className="hireMeForm__label" htmlFor="name">
            {t("nameQ")}
            <p className="label__errorText">{errors?.name?.message}</p>
            <input
              {...register("name", { required: "Name is required" })}
              className="hireMeForm__input"
              id="name"
              type="text"
            />
          </label>
          <label className="hireMeForm__label" htmlFor="userContact">
            {t("contactQ")}
            <p className="label__errorText">{errors?.userContact?.message}</p>
            <input
              {...register("userContact", { required: "Contact is required" })}
              className="hireMeForm__input"
              id="userContact"
              type="text"
            />
          </label>
          <div className="hireMeForm__flexBlock">
            <input
              {...register("price", { required: true })}
              className={`flexBlock__input ${errors.price && "error"}`}
              type="number"
              placeholder={`${t("price")}($)`}
            />
            <input
              {...register("time", { required: true })}
              className={`flexBlock__input ${errors.time && "error"}`}
              type="text"
              placeholder={t("time")}
            />
          </div>
          <label className="hireMeForm__label" htmlFor="description">
            {t("description")}
            <p className="label__errorText">{errors.description?.message}</p>
            <textarea
              {...register("description", {
                required: "Overview is required",
              })}
              className="hireMeForm__textarea"
              name="description"
              id="description"
            ></textarea>
          </label>
          {!isSend && (
            <button disabled={isLoading} className="hireMeFrom__btn">
              <p className="hireMeFrom__btn_text">{t("send")}</p>
              {isLoading && (
                <l-squircle
                  size="16"
                  stroke="2"
                  stroke-length="0.15"
                  bg-opacity="0.1"
                  speed="0.9"
                  color="black"
                ></l-squircle>
              )}
            </button>
          )}
          {isSend && (
            <button className="hireMeFrom__btnSended">{t("sended")}</button>
          )}
        </form>
      </div>
    </div>
  );
};
