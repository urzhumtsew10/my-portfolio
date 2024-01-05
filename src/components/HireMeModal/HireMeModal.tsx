import { FC, useState } from "react";
import "../HireMeModal/HireMeModal.scss";
import icon_close from "../../img/icon-close.svg";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

export const HireMeModal: FC<{}> = () => {
  const { modalHireMe } = useAppSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const [isSend, setIsSend] = useState(false);

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

  const trySendOrder: SubmitHandler<HireMeFields> = (data) => {
    console.log(data);
    setIsSend(true);
    setTimeout(() => {
      dispatch(setModalHireMe(false));
    }, 3000);
  };

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
        <h2 className="contentModal__title">Write More Details</h2>
        <form
          onSubmit={handleSubmit(trySendOrder)}
          className="contentModal__hireMeForm"
        >
          <label className="hireMeForm__label" htmlFor="name">
            What's your name and surname?
            <p className="label__errorText">{errors?.name?.message}</p>
            <input
              {...register("name", { required: "Name is required" })}
              className="hireMeForm__input"
              id="name"
              type="text"
            />
          </label>
          <label className="hireMeForm__label" htmlFor="userContact">
            How can I connect with you?
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
              {...register("price")}
              className="flexBlock__input"
              type="number"
              placeholder="price($)"
            />
            <input
              {...register("time")}
              className="flexBlock__input"
              type="text"
              placeholder="time"
            />
          </div>
          <label className="hireMeForm__label" htmlFor="description">
            Write please about your project
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
          {!isSend && <button className="hireMeFrom__btn">Send</button>}
          {isSend && <button className="hireMeFrom__btnSended">Sended</button>}
        </form>
      </div>
    </div>
  );
};
