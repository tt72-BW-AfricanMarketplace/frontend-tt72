import React from "react";
import { Route, Redirect } from "react-router-dom";
const userIsLoggedIn = true;

const AppRoute = ({ component: Component, path, isPrivate, isExact, ...props }) => {
	if (isExact && isExact !== "undefined") {
		return <Route exact path={path} render={() => <Component {...props} />} {...props} />
	}
	return (
		<Route path={path}
			render={() => isPrivate && !userIsLoggedIn ?
				<Redirect to="/" />
				: <Component {...props} />
			}
			{...props}
		/>
	);
}

export default AppRoute;