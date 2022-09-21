import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summaryTabActive: true,
  detailsTabActive: false,
};

export const dashboardSlice = createSlice({
  name: "dashboardToggle",
  initialState,
  reducers: {
    setSummaryTab(state) {
      state.detailsTabActive = false;
    },

    setDetailsTab(state) {
      state.detailsTabActive = true;
    },
  },
});

export default dashboardSlice.reducer;

export const dashboardActions = dashboardSlice.actions;
