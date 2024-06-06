import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
        reducer:{
                app:navSlice,
                search:SearchSlice
        }
})
export default store;