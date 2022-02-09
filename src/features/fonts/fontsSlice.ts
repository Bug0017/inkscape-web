import { createSlice } from "@reduxjs/toolkit";
interface FontState {
  name: string;
}

const initialState: FontState = {
  name: "",
};

const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    setFontName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFontName } = fontsSlice.actions;
export default fontsSlice.reducer;
