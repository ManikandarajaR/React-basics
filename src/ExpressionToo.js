import React, { Component } from 'react';

export class ExpressionToo extends Component {
  user = true;

  render() {
    if (this.user) {
      return (
        <div>
          <h1>Manikandaraja</h1>
          <img
            src={
              'https://i.pinimg.com/236x/a2/21/da/a221daa53bc8061c6e597c04818f4b06.jpg'
            }
          />
          <p>It is {new Date().toLocaleTimeString()}</p>
        </div>
      );
    }
    return <h1>Hello Guest</h1>;
  }
}
export default ExpressionToo;
