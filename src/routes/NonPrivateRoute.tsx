import React from "react";
import { Route } from "react-router-dom";

interface NonPrivateRouteProps {
	component: React.ComponentType;
	path: string;
	exact: boolean;
}

const NonPrivateRoute: React.FC<NonPrivateRouteProps> = (props) => {
	return (
		<Route path={props.path} exact={props.exact} component={props.component} />
	);
};
export default NonPrivateRoute;
