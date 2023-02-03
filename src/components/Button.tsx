interface Button {
	children?: React.ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
}

const Button = ({ className, children, type }: Button) => {
	return (
		<button
			type={type || "button"}
			className={`bg-purple-light text-lg text-white uppercase min-w-[120px] w-min py-2 ${className}`}
		>
			{children}
		</button>
	);
};
export default Button;
