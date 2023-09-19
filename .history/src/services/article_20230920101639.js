import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
	method: "GET",
	url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
	params: {
		url: "https://time.com/6266679/musk-ai-open-letter/",
		length: "3"
	},
	headers: {
		"X-RapidAPI-Key": "cad42926f5msh05bde039867f9cfp19c442jsn7363325c2e07",
		"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com"
	}
};

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
