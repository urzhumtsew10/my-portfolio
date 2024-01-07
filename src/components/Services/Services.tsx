import React, { FC, useEffect, useRef } from "react";
import "../Services/Services.scss";
import lights from "../../img/lights-yellow.png";
import { ServicesCard } from "./ServicesCard";
import { headerSlice } from "../../store/reducers/HeaderSlice";
import { useAppDispatch } from "../../store/hooks";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Services: FC<{}> = () => {
  const { t } = useTranslation();

  const servicesList = [
    { title: "Layout", text: t("layout"), img: "layout.png" },
    { title: "Landing page", text: t("landingPage"), img: "landing-page.png" },
    {
      title: "Fullstack app",
      text: t("fullstackApp"),
      img: "online-store.png",
    },
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
          {t("my")} <span className="titleServices__span">{t("services")}</span>
        </h2>
        <p className="titleBlock__text">{t("serviceText")}</p>
      </div>
      <div className="services__serviceCardsBlock">
        {servicesList.map(({ img, title, text }) => (
          <ServicesCard key={title} img={img} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Services);
