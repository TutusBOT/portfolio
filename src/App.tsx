import { About, Background, Contact, Main, NavBar, Work } from "./components";
import "./index.css";

function App() {
	return (
		<div className="w-screen bg-black text-white font-comforta overflow-hidden flex flex-col max-w-full">
			<Background />
			<NavBar />
			<Main />
			<About />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
