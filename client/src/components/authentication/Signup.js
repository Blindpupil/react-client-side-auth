import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Sign_up extends Component {
  render() {
    return(
      <form>
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
      </form>
    )
  }
}

export default reduxForm({form: 'signup'})(Sign_up);