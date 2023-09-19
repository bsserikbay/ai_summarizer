import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => 
})
