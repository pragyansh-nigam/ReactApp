import React, { Component } from 'react';
import "./Login.css"; 

export default class Login extends Component {

  loginUserData;

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = { email: '', pwd: '' }
  }

  //Form Events

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ pwd: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    /**this.setState({ email: '', pwd: '' })*/
  }

  //React life cycle
  componentDidMount() {
    this.loginUserData = JSON.parse(localStorage.getItem('loginUser'));

    if (localStorage.getItem('loginUser')) {
      this.setState({
        email: this.loginUserData.email,
        pwd: this.loginUserData.pwd,
      })
    } else {
      this.setState({ email: '', pwd: '' })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('loginUser', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
        <h2>Sign In</h2>
        <p class="hint-text">Login to your account</p>
        <br />
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={this.state.pwd} onChange={this.onChangePassword} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div class="text-center">Don't have an account? <a href="/signup">Sign Up</a></div>
      </div>
    )   
  }
}


/**import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}*/