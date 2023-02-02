interface Button {
	children?: React.ReactNode;
	className?: string;
}

const Button = ({ className, children }: Button) => {
	return (
		<button
			className={`bg-purple-light text-lg text-white uppercase min-w-[120px] w-min py-2 ${className}`}
		>
			{children}
		</button>
	);
};
export default Button;
