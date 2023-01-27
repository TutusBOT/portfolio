const NavBar = () => {
	return (
		<nav className="w-full fixed flex justify-between py-4 px-16 text-xl bg-black z-10 border-b-2 border-white">
			<a href="mailto:bartlomiej.tutak0@gmail.com">
				bartlomiej.tutak0@gmail.com
			</a>
			<ul className="flex gap-8 uppercase">
				<li>
					<a href="#about">/About</a>
				</li>
				<li>
					<a href="#work">/Work</a>
				</li>
				<li>
					<a href="#contact">/Contact</a>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
