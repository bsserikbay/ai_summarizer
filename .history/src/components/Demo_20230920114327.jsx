import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
	const [article, setArticle] = useState({
		url: "",
		summary: ""
	});

	const [getSummary, { error, isFetcing }] = useLazyGetSummaryQuery();

	const handleSubmit = async e => {
		const { data } = await getSummary({ articleUrl: article.url });
		if (data?.summary) {
			const newArticle = { ...article, summary: data.summary };

			setArticle(newArticle);
		}
	};
	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				<form action="" className="relative flex justify-center items-center" onSubmit={handleSubmit}>
					<img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
					<input
						type="url"
						placeholder="Enter a URL"
						value={article.url}
						onChange={e => {
							setArticle({ ...article, url: e.target.value });
						}}
						required
						className="url_input peer"
					/>
					<button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
						&#8629;
					</button>
				</form>
			</div>
		</section>
	);
};

export default Demo;
