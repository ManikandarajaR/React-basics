import React, { Component } from 'react';

export class ExpressionToo extends Component {
  user = false;

  render() {
    if (this.user) {
      return(
        <h1>Manikandaraja</h1>
      )
    }
    return <h1>Hello Guest</h1>
    
    
  }
}
export default ExpressionToo;
