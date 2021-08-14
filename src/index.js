import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function formatName() {
  return user.fname + user.lname;
}
const user = {
  fname: 'Mani',
  lname: 'raja'
};

const element = <h1>Hello {formatName()} </h1>;
ReactDOM.render(<App/>, document.getElementById('root'));
