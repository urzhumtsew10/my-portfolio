import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
interface Service {
  title: string;
  en: { title: string; description: string; url: string };
  ru: { title: string; description: string; url: string };
  ua: { title: string; description: string; url: string };
}

interface SelectService {
  title: string;
  description: string;
  url: string;
}

interface ModalState {
  modalHireMe: boolean;
  modalService: boolean;
  selectService: SelectService;
}
const servicesData: Service[] = [
  {
    title: "Layout",
    en: {
      title: "Layout",
      description:
        "A layout is the repetition of a page you submit or several sites that you like (into one). Changing headlines, text, photos or colors to suit you",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
    ru: {
      title: "Верстка",
      description:
        "Верстка - это повторение страницы, которую вы представляете, или нескольких сайтов, которые вам нравятся (в одном). Изменение заголовков, текста, фотографий или цветов в соответствии с вашими потребностями",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
    ua: {
      title: "Верстка",
      description:
        "Верстка - це повторення сторінки, яку ви надсилаєте, або декількох сайтів, які вам подобаються (в один). Зміна заголовків, тексту, фотографій або кольорів, щоб задовольнити вас",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
  },
  {
    title: "Landing page",
    en: {
      title: "Landing page",
      description:
        "Landing page, this is a one-page website or application, where all content is placed on a single page for convenience add a navigation menu that easily helps to navigate through the desired sections of the site. Also landing pages contain Content Manager System thanks to which site administrators can change the content without changing the code ",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
    ru: {
      title: "Одностраничный сайт",
      description:
        "Landing page, это одностраничный веб-сайт или приложение, где все содержимое размещается на одной странице для удобства добавить меню навигации, которая легко помогает перемещаться через нужные разделы сайта. Кроме того, на страницах, содержащих Content Manager System, администраторы сайта могут изменять содержимое без изменения кода",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
    ua: {
      title: "Односторінковий сайт",
      description:
        "Landing page, це односторінковий сайт або додаток, де весь контент розміщується на одній сторінці, для зручності додайте навігаційне меню, яке легко допомагає зорієнтуватися в потрібних розділах сайту. Також цільові сторінки містять систему Content Manager, завдяки якій адміністратори сайту можуть змінювати контент без зміни коду",
      url: "https://chef-food-urzhumtsew.netlify.app/",
    },
  },
  {
    title: "Fullstack app",
    en: {
      title: "Fullstack app",
      description:
        "This is a complete application from Front-end, Back-end and Database. The type of this site can be suitable for any business from a private small and up to a large company. Also CMS that will allow you to change the content of the site (for example, products or just change the link to social networks)",
      url: "https://electricity-store.vercel.app/",
    },
    ru: {
      title: "Fullstack приложение",
      description:
        "Это полное приложение из Front-End, Back-End и Database. Тип этого сайта может быть подходящим для любого бизнеса от частного малого и до большой компании. Также CMS позволит изменить содержание сайта (например, продукты или просто изменить ссылки на социальные сети)",
      url: "https://electricity-store.vercel.app/",
    },
    ua: {
      title: "Fullstack додаток",
      description:
        "Це повне додаток від Front-end, Back-end і Database. Тип даного сайту може підійти для будь-якого бізнесу від приватного малого і до великої компанії. Також CMS, яка дозволить змінити зміст сайту (наприклад, продукти або просто змінити посилання на соціальні мережі)",
      url: "https://electricity-store.vercel.app/",
    },
  },
];

const initialState: ModalState = {
  modalHireMe: false,
  modalService: false,
  selectService: { title: "", description: "", url: "" },
};

interface ActionPayloadSelectService {
  title: string;
  language: string;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalHireMe(state, action: PayloadAction<boolean>) {
      state.modalHireMe = action.payload;
    },
    setModalService(state, action: PayloadAction<boolean>) {
      state.modalService = action.payload;
    },
    setSelectService(state, action: PayloadAction<ActionPayloadSelectService>) {
      if (action.payload) {
        const currentService: any = servicesData.filter(
          (service) => service.title === action.payload.title
        )[0];
        state.selectService = currentService[action.payload.language];
      }
    },
  },
});

export default modalSlice.reducer;
