import "./shine.css";
import { motion } from "framer-motion";

interface Link {
	url: string;
	text: string;
	className?: string;
	target?: "_blank" | "_self" | "_top" | "_parent";
	variant?: "outlined" | "filled";
}

const Link = ({ url, text, className, target, variant = "outlined" }: Link) => {
	const variants = {
		rest: {
			top: "0px",
			left: "0px",
		},
		hover: {
			top: "10px",
			left: "10px",
		},
	};

	if (variant === "filled")
		return (
			<motion.a
				className={`relative text-lg bg-purple py-4 px-8 min-w-[120px] ${className}`}
				href={url}
				target={target || "_blank"}
				rel="noreferrer"
				initial="rest"
				whileHover="hover"
			>
				{text}
				<motion.div
					className="absolute w-full h-full border-2 border-purple"
					transition={{ ease: "easeIn" }}
					variants={variants}
				/>
			</motion.a>
		);
	else {
		return (
			<a
				className={`shine text-md border-white border-2 py-2 px-6 hover:text-purple hover:border-purple transition-colors min-w-[120px] text-center ${className}`}
				href={url}
				target={target || "_blank"}
				rel="noreferrer"
			>
				{text}
			</a>
		);
	}
};
export default Link;
