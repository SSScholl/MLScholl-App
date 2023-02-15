// Import React
import React, { useCallback, useState } from "react";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
	BrowserRouter as Router, Routes,
	Route, Link
} from "react-router-dom";

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import SplashPage from "./components/SplashPage";
import Particles from "./components/Particles";
import TicTacToe from "./components/tictactoe";
import Snake from "./components/snake";

// App Component
const App = () => {

	const [darkMode, setDarkMode] = useState(false);


	return (
		<Router>
			<div className="App">
				<header className="bg-gray-900">
					<div className="container mx-auto flex items-center justify-between px-4 py-3">
						<div className="text-white font-medium">
							<Link to={"/"} className="nav-link">
								Michael Scholl
							</Link>
						</div>
						<nav className="flex space-x-4">
							<Link to={"/AboutMe"} className="text-white hover:text-gray-500">
								About
							</Link>
							<Link to={"/ContactMe"} className="text-white hover:text-gray-500">
								Contact
							</Link>
							<Link to={"/Projects"} className="text-white hover:text-gray-500">
								Projects
							</Link>
							<Link to={"/Particles"} className="text-white hover:text-gray-500">
								Links
							</Link>
						</nav>
					</div>
				</header>


				<div className="wrapper">
					<Routes>
						<Route path="/" element={<SplashPage />} />
						<Route path="/ContactMe"
							element={<ContactMe />} />
						<Route path="/AboutMe"
							element={<AboutMe />} />
						<Route path="/Projects"
							element={<Projects />} />
						<Route path="/Particles"
							element={<Particles />} />
						<Route path="/TicTacToe"
							element={<TicTacToe />} />
						<Route path="/Snake"
							element={<Snake />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;