import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isServices: [],
  isEmail: "",
};

export const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsUser(state, action) {
      state.user = action.payload;
    },
    setIsSuccess(state, action) {
      state.isSuccess = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsMessage(state, action) {
      state.message = action.payload;
    },
    setIsServices(state, action) {
      state.isServices = action.payload;
    },
    setIsEmail(state, action) {
      state.isEmail = action.payload;
    },
  },
});

export default authSlicer.reducer;
export const authActions = authSlicer.actions;
