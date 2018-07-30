import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Sign_up extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    // grab the handleSubmit provided by redux-form
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="">Email</label>
          <Field name="email" type="text"
                 component="input" autoComplete="none">
          </Field>
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <Field name="password" type="password"
                 component="input" autoComplete="none">
          </Field>
        </fieldset>
        <button>Sign Up</button>
      </form>
    )
  }
}

export default compose(
  connect(null, actions), // High Order Components applied to this one
  reduxForm({form: 'signup'})
)(Sign_up);