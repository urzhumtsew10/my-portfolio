import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Service {
  title: string;
  description: string;
  url: string;
}

interface ModalState {
  modalHireMe: boolean;
  modalService: boolean;
  selectService: Service;
}

const servicesData: Service[] = [
  {
    title: "Layout",
    description:
      "A layout is the repetition of a page you submit or several sites that you like (into one). Changing headlines, text, photos or colors to suit you",
    url: "https://chinese-food.netlify.app/",
  },
  {
    title: "Landing page",
    description:
      "Landing page, this is a one-page website or application, where all content is placed on a single page for convenience add a navigation menu that easily helps to navigate through the desired sections of the site. Also landing pages contain Content Manager System thanks to which site administrators can change the content without changing the code ",
    url: "https://chinese-food.netlify.app/",
  },
  {
    title: "Fullstack app",
    description:
      "is a complete application from Front-end, Back-end and Database. The type of this site can be suitable for any business from a private small and up to a large company. Also CMS that will allow you to change the content of the site (for example, products or just change the link to social networks)",
    url: "https://electricity-store.vercel.app/",
  },
];

const initialState: ModalState = {
  modalHireMe: false,
  modalService: false,
  selectService: { title: "", description: "", url: "" },
};

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
    setSelectService(state, action: PayloadAction<string>) {
      if (action.payload) {
        const currentService: Service = servicesData.filter(
          (service) => service.title === action.payload
        )[0];
        state.selectService = currentService;
      }
    },
  },
});

export default modalSlice.reducer;
