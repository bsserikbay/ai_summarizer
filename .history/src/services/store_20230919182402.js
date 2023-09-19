import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { articleApi } from "./article";

export store = configureStore({
    reducer: {
        [articleApi.reducerPath] = articleApi.reducerPath
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})
