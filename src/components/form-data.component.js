import React, { Component } from 'react';
import "./form-data.component.css"; 

export default class FormDataComponent extends Component {

	userData;

	constructor(props) {
		super(props);

		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			firstname: '', lastname: '', dob: '', phone: '', email: '', pwd: '', cpwd: ''
		}
	}

	//Form Events
	onChangeFirstName(e) {
		this.setState({ firstname: e.target.value })
	}

	onChangeLastName(e) {
		this.setState({ lastname: e.target.value })
	}

	onChangeDateOfBirth(e) {
		this.setState({ dob: e.target.value })
	}

	onChangePhone(e) {
		this.setState({ phone: e.target.value })
	}

	onChangeEmail(e) {
		this.setState({ email: e.target.value })
	}

	onChangePassword(e) {
		this.setState({ pwd: e.target.value })
	}

	onChangeConfirmPassword(e) {
		this.setState({ cpwd: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()

		/**this.setState({
			firstname: '', lastname: '', dob: '', phone: '', email: '', pwd: '', cpwd: ''
		})*/
	}

	//React life cycle
	componentDidMount() {
		this.userData = JSON.parse(localStorage.getItem('user'));

		if (localStorage.getItem('user')) {
			this.setState({
				firstname: this.userData.firstname,
				lastname: this.userData.lastname,
				dob: this.userData.dob,
				phone: this.userData.phone,
				email: this.userData.email,
				pwd: this.userData.pwd,
				cpwd: this.userData.cpwd
			})
		} else {
			this.setState({
				firstname: '', lastname: '', dob: '', phone: '', email: '', pwd: '', cpwd: ''
			})
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('user', JSON.stringify(nextState));
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.onSubmit}>
				<h2>Register</h2>
				<p class="hint-text">Create your account</p>
				<br />
					<div className="form-group">
						<div class="row">
							<div class="col"><label>First Name</label>
							<input type="text" className="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.onChangeFirstName} oninvalid="alert('You must fill out the form!');" required="required" />
							</div>
							<div class="col"><label>Last Name</label>
							<input type="text" className="form-control" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastName} required="required" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label>Date Of Birth</label>
						<input type="date" className="form-control" value={this.state.dob} onChange={this.onChangeDateOfBirth} required="required" />
					</div>
					<div className="form-group">
						<label>Gender :</label>&nbsp;&nbsp;
						<select>
								<option>--Select--</option>
								<option>Male</option>
								<option>Female</option>
								<option>Other</option>
						</select>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="tel" className="form-control" placeholder="Contact No. XXXXX-XXXXX" pattern="[0-9]{5}-[0-9]{5}" value={this.state.phone} onChange={this.onChangePhone} required="required" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required="required" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Password" value={this.state.pwd} onChange={this.onChangePassword} required="required" />
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input type="password" className="form-control" placeholder="Confirm Password" value={this.state.cpwd} onChange={this.onChangeConfirmPassword} required="required" />
					</div>
					<div class="form-group">
					<input type="checkbox" class="form-check-label" required/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a> 
					</div>
					<button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
				</form>
				<div class="text-center">Already have an account? <a href="/login">Sign in</a></div>
			</div>
		)		
	}
}