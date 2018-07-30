import React, { Component } from 'react';

export default class extends Component {
  render() {
    return(
      <form>
        <fieldset>
          <label htmlFor="">Email</label>
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
        </fieldset>
      </form>
    )
  }
}