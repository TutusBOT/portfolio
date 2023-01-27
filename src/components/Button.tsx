interface Button {
	children?: React.ReactNode;
}

const Button = ({ children }: Button) => {
	return (
		<button className="bg-purple-light text-white uppercase min-w-[120px] w-min">
			{children}
		</button>
	);
};
export default Button;
