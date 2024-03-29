import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "./Skeleton";

const Footer = () => {
	const about = useQuery(["main"], () =>
		axios.get("https://strapi.bartlomiejtutak.com/main")
	);

	return (
		<footer className="bg-black-dark w-full py-8 px-4 sm:px-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 lg:gap-32">
			<div>
				<h3 className="text-2xl">Bartłomiej Tutak</h3>
				<div className="text-sm">
					{about.data ? (
						about.data.data.description
					) : (
						<Skeleton className="w-10 h-5" />
					)}
				</div>
			</div>
			<div className="flex items-center gap-4">
				<a href="https://github.com/TutusBOT" className="w-8">
					<img src="github-mark-white.png" alt="github" />
				</a>
				<a href="mailto:bartlomiej-tutak0@gmail.com" className="w-8">
					<img src="mail.svg" alt="mail" />
				</a>
			</div>
		</footer>
	);
};
export default Footer;
