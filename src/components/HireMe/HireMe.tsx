import { FC, SetStateAction, useEffect } from "react";
import "../HireMe/HireMe.scss";
import my_photo from "../../img/my-photo2.png";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/reducers/ModalSlice";
import { headerSlice } from "../../store/reducers/HeaderSlice";

export const HireMe: FC<{}> = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const dispatch = useDispatch();
  const { setModalHireMe } = modalSlice.actions;
  const { setSelectHeaderItem } = headerSlice.actions;

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("resume"));
    }
  }, [inView]);

  const openHireMeModal = () => {
    dispatch(setModalHireMe(true));
    document.body.style.overflow = "hidden";
  };

  return (
    <div id="resume" ref={ref} className="hireMeBlock">
      <div className={`hireMeBlock__blockMyPhoto ${inView && "active"}`}>
        <img className="blockMyPhoto__img" src={my_photo} alt="my photo" />
      </div>
      <div className={`hireMeBlock__blockMyInfo ${inView && "active"}`}>
        <h2 className="blockMyInfo__title">
          Why <span className="blockMyInfo__title__span">Hire me</span>?
        </h2>
        <p className="blockMyInfo__text">
          I have experience working with websites of different types and
          complexities, I quickly find common ground and requirements from me, I
          develop high-quality, optimized and easily maintainable code.
        </p>
        <div className="blockMyInfo__achievement">
          <div className="achievement">
            <h2 className="achievement__count">100+</h2>
            <p className="achievement__name">Project completed</p>
          </div>
          <div className="achievement">
            <h2 className="achievement__count">100+</h2>
            <p className="achievement__name">Happy clients</p>
          </div>
        </div>
        <button onClick={openHireMeModal} className="blockMyInfo__btn">
          Hire me
        </button>
      </div>
    </div>
  );
};
