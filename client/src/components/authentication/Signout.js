import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Sign_out extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return( <div>Sorry to see you go</div> )
  }
}

export default connect(null, actions)(Sign_out);