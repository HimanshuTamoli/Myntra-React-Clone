
import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

import fetchStatusSLice from "./fetchStatusSLice.js";
import bagSlice from "./BagSlice.js";

const myntrastore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSLice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntrastore;