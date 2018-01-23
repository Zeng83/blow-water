import React, { Component } from "react";
// import config from "../config.json";

class SubmitForm extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const {submitForm} = this.props;
		submitForm(this.state);
		console.log(this.state);
	}

	handleChange(e) {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Name:
				    <input type="text" name="name" onChange={this.handleChange} />
				  </label>
				  <label>
				    Department:
				    <input type="text" name="department" onChange={this.handleChange} />
				  </label>
				  <label>
				    Salary Level:
				    <input type="text" name="salary" onChange={this.handleChange} />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>
		); 
	}
}

export default SubmitForm;