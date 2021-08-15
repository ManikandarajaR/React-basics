import React, { Component } from 'react';

class ReactStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [1],
      comments: [2]
    };
  }

  ComponentDidMount = () =>
  {
    fetchPosts().then((res) =>{
        this.setState(
          {
            posts : res.posts
          }
        )
    })
    fetchPosts().then((res) =>{
      this.setState(
        {
          comments : res.comments
        }
      )
  })
  }


  ChangeContent = () => {
    this.setState({
      counter: 'Hello'
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.comments}</h1>
        <button onClick={this.ChangeContent}>Click me </button>
        <h2>{this.state.counter}</h2>
        <h1>{this.state.comments}</h1>
      </div>
    );
  }
}
export default ReactStates;
