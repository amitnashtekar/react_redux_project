import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import _ from 'lodash';
import styles from "./login-form.scss";

class LoginForm extends Component {
	state = {
		data: {
			email:'',
			password:''
		},
		loading: false,
		error: {}
	};
	handleChange = (e) => {
		this.setState({
			data:{...this.state.data,[e.target.id]: e.target.value}
		})
	};
	onSubmit = (e) => {
		e.preventDefault();
		const error = this.validate(this.state.data);
		this.setState({error});
		if(_.keys(error).length > 0) {
			console.log('errors');
			return;
		}
		this.props.submit(this.state.data);
		
	};
	validate =(data) => {
		const error = {};
		const {email,password} = data;
		if(!email) {
			error.email = 'email is required !';
		}
		if(!password) {
			error.password = 'password is required !';
		}

		return error;
	}

	render() {
		const {email,password} = this.state.data;
		const {error} = this.state;
		return (
			<div className="row col-full-height center-xs middle-xs">
				<div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
					<Paper className={styles.login} elevation={1}>
						<form onSubmit={this.onSubmit}>
							<TextField
								error = {error.email ? true: false}
								id="email"
								label="Email"
								fullWidth={true}
								margin="normal"
								value={email}
								onChange={this.handleChange}
								helperText={error.email}
							/>
							<TextField
								error = {error.password ? true: false}
								id="password"
								label="password"
								fullWidth={true}
								margin="normal"
								value={password}
								onChange={this.handleChange}
								helperText={error.password}
							/>
							<Button
								variant="outlined"
								color="primary"
								type="submit"
							>
								Login
							</Button>
							<div>
							{email}:{password}
							</div>
						</form>
					</Paper>
				</div>
			</div>
		);
	}
}

export default LoginForm;
