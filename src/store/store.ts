import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/ModalSlice";
import headerReducer from "./reducers/HeaderSlice";

const rootReducer = combineReducers({
  modalReducer,
  headerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
