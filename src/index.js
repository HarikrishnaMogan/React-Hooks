import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Counter from "./usereduce";
import Life from "./lifecycle";

ReactDOM.render(
  <>
  <App />
  <hr></hr>
  <Counter />
  <hr></hr>
   <Life />
  </>,
  document.getElementById('root')
);


