import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth_actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage && !this.props.authenticated) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password"/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" {...passwordConfirm}  type="password"/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  ['email', 'password', 'passwordConfirm'].forEach((field) => {
    if (!formProps[field]) {
      let fieldName = field === 'passwordConfirm' ? 'password confirmation' : field;
      errors[field] = `Please enter an ${fieldName}`;
    }
  });
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error, authenticated: state.auth.authenticated  };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
}, mapStateToProps, actions)(Signup);
