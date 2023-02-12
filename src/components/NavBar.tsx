import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [upperAnimation, setUpperAnimation] = useState({
		rotate: 0,
		translateY: 0,
	});
	const [middleAnimation, setMiddleAnimation] = useState({
		width: "1.5rem",
	});
	const [lowerAnimation, setLowerAnimation] = useState({
		rotate: 0,
		translateY: 0,
	});

	const handleOpen = () => {
		setOpen(!open);
		if (!open) {
			setUpperAnimation({ rotate: 45, translateY: 9 });
			setMiddleAnimation({ width: "0" });
			setLowerAnimation({ rotate: -45, translateY: -9 });
		} else {
			setUpperAnimation({ rotate: 0, translateY: 0 });
			setMiddleAnimation({ width: "1.5rem" });
			setLowerAnimation({ rotate: 0, translateY: 0 });
		}
	};

	return (
		<nav className="w-full fixed flex justify-between items-center py-8 px-4 lg:px-16 text-lg lg:text-xl bg-black-dark z-10 shadow-xl">
			<a
				href="mailto:bartlomiej.tutak0@gmail.com"
				className="hover:text-purple transition-colors text-base sm:text-lg lg:text-xl"
			>
				bartlomiej.tutak0@gmail.com
			</a>

			<ul className="hidden md:flex gap-8 uppercase">
				<li className="hover:text-purple transition-colors">
					<a href="#home">Home</a>
				</li>
				<li className="hover:text-purple transition-colors">
					<a href="#about">About</a>
				</li>
				<li className="hover:text-purple transition-colors">
					<a href="#work">Work</a>
				</li>
				<li className="hover:text-purple transition-colors">
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<motion.button
				className="flex flex-col gap-2 items-center md:hidden"
				onClick={handleOpen}
			>
				<motion.div
					className="w-8 bg-white h-[1px]"
					animate={upperAnimation}
				></motion.div>
				<motion.div
					className="w-6 bg-white h-[1px]"
					animate={middleAnimation}
				></motion.div>
				<motion.div
					className="w-8 bg-white h-[1px]"
					animate={lowerAnimation}
				></motion.div>
			</motion.button>

			<ul
				className={`${
					open ? "flex" : "hidden"
				} flex md:hidden absolute top-[100%] flex-col md:flex-row gap-8 uppercase w-full bg-black-dark items-end -ml-4 pr-4 pb-8`}
			>
				<li onClick={handleOpen}>
					<a href="#home">Home</a>
				</li>
				<li onClick={handleOpen}>
					<a href="#about">About</a>
				</li>
				<li onClick={handleOpen}>
					<a href="#work">Work</a>
				</li>
				<li onClick={handleOpen}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
