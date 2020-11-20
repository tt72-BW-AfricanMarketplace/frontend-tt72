import React from 'react';
import { Switch } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import routes from "./routes/routes";

function App() {
	return (
		<>
			<div className="App">
				<Switch>
					{routes.map(route => {
						return (
							<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} isExact={route.isExact} />
						)
					})}
				</Switch>
			</div>
		</>
	);
}

export default App;
