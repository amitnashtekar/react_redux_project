import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { CustomerSearch, Login } from "../../features";
import { HeaderApp } from "../../features/common";

export default class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<HeaderApp />

					<Switch>
						<Route path="/search" component={CustomerSearch} />

						<Route exact path="/" component={Login} />
						<Redirect from="*" to="/" />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
