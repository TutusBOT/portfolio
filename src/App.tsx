import {
	About,
	Contact,
	Cursor,
	Footer,
	Main,
	NavBar,
	Work,
} from "./components";
import "./index.css";

function App() {
	return (
		<div className="w-screen bg-black text-white font-comforta flex flex-col max-w-full">
			<Cursor />
			<NavBar />
			<Main />
			<About />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
