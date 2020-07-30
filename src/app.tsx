import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Second } from './pages';
import { get } from './utils/db-helper';

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);

interface User {
	name: string;
}

function App() {
	const [user, _] = useState<User>(get('user'));
	const { name } = user;
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
				<Route path="/second" render={() => <Second name={name} />} />
			</Switch>
		</Router>
	);
}

ReactDom.render(<App />, mainElement);
