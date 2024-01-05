import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  selectHeaderItem: string;
}

const initialState: ModalState = {
  selectHeaderItem: "home",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSelectHeaderItem(state, action: PayloadAction<string>) {
      state.selectHeaderItem = action.payload;
    },
  },
});

export default headerSlice.reducer;
