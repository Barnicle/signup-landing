import React, { Fragment } from "react";
import styled from "styled-components";
import StyledTerms from "./styles/StyledTerms";
import { StyledForm, StyledInput, StyledErrorMessage } from "./styles/Form";
class Form extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    errors: ["false", "false", "false", "false"],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      this.clearForm();
      return;
    }
    document.querySelectorAll("input").forEach((el) => {
      const errors = this.state.errors;
      if (el.checkValidity()) errors.splice(el.id, 1, "false");
      else errors.splice(el.id, 1, "true");
      console.log(errors);
      this.setState({ errors });
    });
  };
  clearForm = () =>
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: [false, false, false, false],
    });
  saveToState = (e) => {
    const errors = this.state.errors;
    if (e.target.checkValidity()) errors.splice(e.target.id, 1, false);
    else errors.splice(e.target.id, 1, true);
    this.setState({ errors });
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <StyledForm method="post" noValidate onSubmit={this.handleSubmit}>
        <div>
          <StyledInput
            type="text"
            name="first_name"
            required
            id="0"
            error={this.state.errors[0]}
            value={this.state.first_name}
            placeholder="First Name"
            onChange={this.saveToState}
          />
          <StyledErrorMessage className={"error"} error={this.state.errors[0]}>
            First Name cannot be empty
          </StyledErrorMessage>
        </div>
        <div>
          <StyledInput
            type="text"
            name="last_name"
            required
            id="1"
            error={this.state.errors[1]}
            value={this.state.last_name}
            placeholder="Last Name"
            onChange={this.saveToState}
          />
          <StyledErrorMessage className={"error"} error={this.state.errors[1]}>
            Last Name cannot be empty
          </StyledErrorMessage>
        </div>

        <div>
          <StyledInput
            type="email"
            name="email"
            required
            id="2"
            error={this.state.errors[2]}
            value={this.state.email}
            placeholder="Email"
            onChange={this.saveToState}
          />
          <StyledErrorMessage className={"error"} error={this.state.errors[2]}>
            Looks like this is not an email
          </StyledErrorMessage>
        </div>
        <div>
          <StyledInput
            type="password"
            name="password"
            required
            id="3"
            error={this.state.errors[3]}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
            autoComplete="suggested-password"
            value={this.state.password}
            placeholder={"Password"}
            onChange={this.saveToState}
          />
          <StyledErrorMessage className="error" error={this.state.errors[3]}>
            Please include at least 1 uppercase character, 1 lowercase
            character, and 1 number.
          </StyledErrorMessage>
        </div>

        <button type="submit">Claim your free Trial</button>
        <StyledTerms>
          By clicking the button you are agreeing to our{" "}
          <a>Terms and Services</a>
        </StyledTerms>
      </StyledForm>
    );
  }
}

export default Form;
