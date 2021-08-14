import React, { Component } from 'react';

class Lifecycle extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      date : new Date()
    }
  }

  componentDidMount()
  {
    this.timerId = setInterval(
      ()=>{
        this.tick()
      }
    )
  }

  componentWillUnMount()
  {
    clearInterval(this.timerId)
  }
  
  tick() {
    this.setState(
      {
        date : new Date()
      }
    )
  }

  render() {
    return <h1>Hello {this.state.date.toLocaleTimeString()}</h1>;
  }
}
export default Lifecycle;
