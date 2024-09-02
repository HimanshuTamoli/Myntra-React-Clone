import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Mutate state directly
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true; // Mutate state directly
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // Mutate state directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;