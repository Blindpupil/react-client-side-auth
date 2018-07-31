import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        This is Feature content. If you can see this, you've been authenticated.
      </div>
    );
  }
}

export default requireAuth(Feature);