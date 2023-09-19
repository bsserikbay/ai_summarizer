import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full">
				<img src={logo} alt="sumz_logo" className="w-28 object-contain" />
				<button type="button" onClick={() => window.open("https://github.com/bsserikbay/ai_summarizer")} className="b">
					GitHub
				</button>
			</nav>
		</header>
	);
};

export default Hero;
