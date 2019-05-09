import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';


var score = 0;

var allImages = ["images/biggie-cheese.jpg", "images/dr-grandayy.jpg", "images/Snidbert.png", "images/south-america.jpg", "images/tom.jpg"];

var clickedImages = [];

function imageClicked(n, e) {
  e.preventDefault();
  if (clickedImages.includes(n)) {
      score = 0;
      clickedImages = [];
  } else {
      score++;
      clickedImages.push(n);
  }
  for (var i = allImages.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = allImages[i];
    allImages[i] = allImages[j];
    allImages[j] = temp;
  }
  ReactDOM.render(<App />, document.getElementById('root'));
}

function ClickImage(props) {
  return(
    <img src={allImages[props.number]} onClick={(e) => imageClicked(allImages[props.number], e)} height="100" width="100" />
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return (
      <div>
      <h2>Score: {score}</h2>

      <ClickImage number={0} />
      <ClickImage number={1} />
      <ClickImage number={2} />
      <ClickImage number={3} />
      <ClickImage number={4} />

      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
