import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const handleMouseMove = (e: MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
	};

	return (
		<motion.div
			className="hidden md:block fixed w-8 h-8 border-purple border-[2px] rounded-full z-20 pointer-events-none"
			variants={variants}
			animate="default"
		/>
	);
};
export default Cursor;
