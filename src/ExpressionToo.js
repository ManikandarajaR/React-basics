import React, { Component } from 'react';

export class ExpressionToo extends Component {
  user = true;

  render() {
    if (this.user) {
      return(
        <div>
            <h1>Manikandaraja</h1>
            <img src="" />
        </div>
       
      )
    }
    return <h1>Hello Guest</h1>
    
    
  }
}
export default ExpressionToo;
