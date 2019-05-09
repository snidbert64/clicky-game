import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var score = 0;

var allImages = ["images/biggie-cheese.jpg", "images/dr-grandayy.jpg", "images/Snidbert.png", "images/south-america.jpg", "images/tom.jpg"];

var clickedImages = [];

function imageClicked(n, e) {
  e.preventDefault();
  alert(n);
  for (var i = allImages.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = allImages[i];
    allImages[i] = allImages[j];
    allImages[j] = temp;
  }
  App.setState();
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
