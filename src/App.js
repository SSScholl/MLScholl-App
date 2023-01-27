// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/AboutMe"}
				className="nav-link">
				Michael Scholl
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/AboutMe"}
					className="nav-link">
					About
				</Link>
				</Nav>

				<Nav>
				<Link to={"/ContactMe"}
					className="nav-link">
					Contact
				</Link>
				</Nav>

			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route path="/ContactMe"
					element={<ContactMe />} />
				<Route path="/AboutMe"
					element={<AboutMe />} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;