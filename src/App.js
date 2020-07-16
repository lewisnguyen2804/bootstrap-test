import React from 'react';
import './App.css';

import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/firstpage">
						<FirstPage />
					</Route>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
