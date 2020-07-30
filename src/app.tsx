import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Second } from './pages';

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);

function App() {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<h1>
							Hi from a React app. <Link to="/second">second page</Link>
						</h1>
					)}
				/>
				<Route path="/second" render={() => <Second name="Taylor" />} />
			</Switch>
		</Router>
	);
}

ReactDom.render(<App />, mainElement);
