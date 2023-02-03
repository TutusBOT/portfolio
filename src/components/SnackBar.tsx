import { useState } from "react";
import { motion } from "framer-motion";

interface SnackBar {
	message: string;
	autoHideDuration: number;
}

const SnackBar = ({ message, autoHideDuration }: SnackBar) => {
	const [hide, setHide] = useState(false);
	const variants = {
		entry: {
			translateX: 0,
			opacity: 1,
			scale: 1,
		},
		hide: {
			translateX: "-100%",
			opacity: 0,
			scale: 0.75,
			onanimationend: {
				display: "none",
			},
		},
	};

	if (!hide) {
		setTimeout(() => setHide(true), autoHideDuration);
	}

	return (
		<motion.div
			className={` fixed bottom-4 left-4 bg-black border-white border-2 flex gap-4 items-center px-4 py-4 -translate-x-full opacity-0 scale-75`}
			variants={variants}
			animate={hide ? "hide" : "entry"}
			transition={{ duration: 0.5, ease: "easeIn" }}
		>
			<div className="text-xl">{message}</div>
			<button
				onClick={() => setHide(true)}
				className="relative cursor-pointer w-8 h-8"
			>
				<div className="w-8 h-[1px] bg-white rotate-45"></div>
				<div className="w-8 h-[1px] bg-white -rotate-45"></div>
			</button>
		</motion.div>
	);
};
export default SnackBar;
