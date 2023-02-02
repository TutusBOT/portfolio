interface Input {
	label: string;
	id: string;
	type?: string;
}

const Input = ({ label, id, type }: Input) => {
	return (
		<div className="flex flex-col max-w-3xl w-full">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type || "text"}
				className="bg-transparent border-white border-2 outline-none text-lg p-2 w-full"
			></input>
		</div>
	);
};
export default Input;
