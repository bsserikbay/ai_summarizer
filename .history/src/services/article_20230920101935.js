import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAoiKey = import.meta.

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
		prepareHeaders: headers => {
			headers.set("X-RapidAPI-Key", "KEY");
			headers.set("X-RapidAPI-Host", "KEY");
		}
	}),
	endpoints: builder => ({
		getSummary: builder.query({
			query: params => "test"
		})
	})
});
