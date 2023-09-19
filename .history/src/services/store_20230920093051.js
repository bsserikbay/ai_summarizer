import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { articleApi } from "./article";

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducerPath
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleApi.middleware)
});
