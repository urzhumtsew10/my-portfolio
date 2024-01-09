import { BaseSyntheticEvent, FC, useEffect, useState } from "react";
import "../SwitcherLng/SwitcherLng.scss";
import icon_earth from "../../img/icon-earth.svg";
import { useTranslation } from "react-i18next";

export const SwitcherLng: FC<{}> = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState("EN");
  const otherLanguage: string[] = ["EN", "RU", "UA"].filter(
    (language) => language !== selectLanguage
  );

  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(selectLanguage.toLowerCase());
  }, [selectLanguage]);

  const toggleOtherLanguage = () => {
    setIsOpenLanguage(!isOpenLanguage);
  };

  const switchLanguage = (event: BaseSyntheticEvent) => {
    setSelectLanguage(event.target?.innerText);
    setIsOpenLanguage(false);
  };

  return (
    <div
      className={`switcherBlock ${(isOpenLanguage && "active") || "unactive"}`}
    >
      <div onClick={toggleOtherLanguage} className="switcherLng">
        <p className="switcherLng__language">{selectLanguage}</p>
        <img className="switcherLng__img" src={icon_earth} alt="icon" />
      </div>
      <div
        onClick={(event) => switchLanguage(event)}
        className="switcherLng__languageDiv"
      >
        {otherLanguage[0]}
      </div>
      <div
        onClick={(event) => switchLanguage(event)}
        className="switcherLng__languageDiv"
      >
        {otherLanguage[1]}
      </div>
    </div>
  );
};
