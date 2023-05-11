import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./ListSlice";
const store = configureStore({
    reducer: {
        ListSlice: ListSlice
    }
})

export default store;