import React, { FC, useEffect, useRef } from "react";
import "../Services/Services.scss";
import lights from "../../img/lights-yellow.png";
import { ServicesCard } from "./ServicesCard";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import { useAppDispatch } from "../../store/hooks";
import { useInView } from "react-intersection-observer";

const Services: FC<{}> = () => {
  const servicesList = [
    { title: "Layout", img: "layout.png" },
    { title: "Landing page", img: "landing-page.png" },
    { title: "Fullstack app", img: "online-store.png" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const { setSelectHeaderItem } = headerSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(setSelectHeaderItem("service"));
    }
  }, [inView]);

  return (
    <div ref={ref} id="service" className="services__contentServices">
      <img className="contentServices__lights" src={lights} alt="lights" />
      <div className="contentServices__titleBlock">
        <h2 className="titleBlock__titleServices">
          My <span className="titleServices__span">Services</span>
        </h2>
        <p className="titleBlock__text">
          Here you can choose the type of service you need and write more
          details about the order
        </p>
      </div>
      <div className="services__serviceCardsBlock">
        {servicesList.map(({ img, title }) => (
          <ServicesCard key={title} img={img} title={title} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Services);
