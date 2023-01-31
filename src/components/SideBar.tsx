const SideBar = () => {
	return (
		<div className="absolute hidden md:flex flex-col gap-8 top-1/2 -translate-y-1/2 px-2 py-4 bg-black-light border-white border-y-2 border-r-2">
			<a
				className="w-14 px-2 py-2 hover:bg-black-dark transition-colors duration-300"
				href="https://github.com/TutusBOT"
			>
				<img src="github-mark-white.png" alt="github" />
			</a>
			<a
				className="w-14 px-2 py-2 hover:bg-black-dark transition-colors duration-300"
				href="mailto:bartlomiej.tutak0@gmail.com"
			>
				<img src="mail.svg" alt="mail" />
			</a>
		</div>
	);
};
export default SideBar;
