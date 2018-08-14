import React, { Component } from "react";
import LoginForm from "./components/login-form";
class Login extends Component {

	submit = (data) => {
		
		console.log('on Submit called parent', JSON.stringify(data));
		
	};

	render() {
		return (
			<div>
				Hi
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

export default Login;
