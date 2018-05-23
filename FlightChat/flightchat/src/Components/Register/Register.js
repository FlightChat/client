import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Register.css";

export default class register extends Component {
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
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className="registerEmail">
            <ControlLabel className="registerLabel" >Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              className="registerForm"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="registerLabel" >Password</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              className="registerForm"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="registerLabel" >Password</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              className="registerForm"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            bsSize="large"
            className="registerSubmit"
            disabled={!this.validateForm()}
            type="submit"
          >
            register
          </Button>
        </form>
      </div>
    );
  }
}