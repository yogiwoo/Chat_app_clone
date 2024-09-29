import { configureStore } from "@reduxjs/toolkit";
import themeSLiceReducer from "./themeSlice";
export const store=configureStore({
    reducer:{
        themeKey:themeSLiceReducer 
    }   
})