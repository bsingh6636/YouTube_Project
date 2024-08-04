import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
        reducer:{
                app:navSlice,
                search:SearchSlice,
                chat:chatSlice
        }
})
export default store;