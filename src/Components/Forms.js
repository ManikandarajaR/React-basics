import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lights : false
    }
  }

  ClickPanu = (change) =>
  {
    this.setState(
      {
        Lights : !change.Lights
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.ClickPanu}>
           {this.state.Lights ? "on" : "off"}</button>
      </div>
    );
  }
}
export default Forms;
