interface Input {
	label: string;
	id: string;
	type?: "email";
}

const Input = ({ label, id, type }: Input) => {
	return (
		<>
			<label htmlFor={id} className="text-xl">
				{label}
			</label>
			<input
				id={id}
				type={type || "text"}
				className="bg-transparent border-black border-2 outline-none text-xl p-2 max-w-[360px]"
			></input>
		</>
	);
};
export default Input;
