import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className="loginEmail">
            <ControlLabel className="loginLabel" >Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              className="loginForm"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="loginLabel" >Password</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              className="loginForm"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            bsSize="large"
            className="loginSubmit"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}