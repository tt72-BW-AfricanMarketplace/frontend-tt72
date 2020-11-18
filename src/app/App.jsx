import React from 'react';
// import React, { useState, useEffect } from 'react';
import { Switch } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import routes from "./routes/routes";
// import axios from "axios";

function App() {
	// const storedJwt = localStorage.getItem("token");
	// const [jwt, setJwt] = useState(storedJwt || null);

	// useEffect(() => {
	// 	const getJwt = async () => {
	// 		const { data } = await axios.get(`/jwt`);
	// 		localStorage.setItem('token', data.token);
	// 		setJwt(data.token);
	// 	};
	// 	const getCsrfToken = async () => {
	// 		const { data } = await axios.get('/csrf-token');
	// 		axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
	// 	};
	// 	getJwt();
	// 	getCsrfToken();
	// }, []);

	return (
		<>
			<div className="App">
				{/* <Counter /> */}
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
