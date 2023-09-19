import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={logo} alt="sumz_logo" className="w-28 object-contain" />
				<button type="button" onClick={() => window.open("https://github.com/bsserikbay/ai_summarizer")} className="black_btn">
					GitHub
				</button>
			</nav>
			<h1 className="head_text">
				Summarize Article with <br />
				<span className="orange_">OpenAI GPT-4</span>
			</h1>
		</header>
	);
};

export default Hero;
