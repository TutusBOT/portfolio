import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "./Link/Link";
import SideBar from "./SideBar";
import Skeleton from "./Skeleton";

const Main = () => {
	const main = useQuery(["main"], () =>
		axios.get("http://192.168.1.10:1338/main")
	);

	return (
		<main className="w-full h-screen" id="home">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-8 flex flex-col items-center gap-6">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
					<span className="text-purple">Hi, I&#39;m</span> Bartłomiej Tutak.
				</h1>
				<h2 className="text-lg sm:text-xl md:text-2xl max-w-[50ch]">
					{main.data ? (
						main.data.data.description
					) : (
						<Skeleton className="h-4 sm:h-5 md:6 w-[50ch]" />
					)}
				</h2>
				<Link
					text="MY WORK"
					url="#work"
					target="_self"
					className="w-[300px] mt-8"
					variant="filled"
				/>
			</div>
			<SideBar />
			<div className="absolute top-[90%] w-full flex justify-center animate-bounce">
				<svg width="64" height="64" viewBox="0 0 512 512">
					<path
						d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM175.91,240,240,303.58V154h32V303.58L336.09,240l22.54,22.71L256,364.54,153.37,262.7Z"
						fill="white"
					></path>
				</svg>
			</div>
		</main>
	);
};
export default Main;
