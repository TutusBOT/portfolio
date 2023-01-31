import { About, Cursor, Footer, Main, NavBar, Work } from "./components";
import "./index.css";

function App() {
	return (
		<div className="w-screen bg-black text-white font-comforta overflow-hidden flex flex-col max-w-full">
			<Cursor />
			<NavBar />
			<Main />
			<About />
			<Work />
			<Footer />
		</div>
	);
}

export default App;
