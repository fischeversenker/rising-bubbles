import React, { Component } from 'react';
import { render } from 'react-dom';
import Bubble from './Bubble';
import './style.css';

class App extends Component {

  theme1 = '#0099cc';
  theme2 = '#9900cc';
  theme3 = '#00cc99';
  bubbleCount = 40;
  bubbles = [];

  constructor() {
    super();

    // blueish
    for(let i = 0; i < this.bubbleCount; i++) {
      this.bubbles.push({
        color: this.theme1,
        size: (Math.random() * 13),
        opacity: Math.random() + 0.2,
        offset: Math.random() * 400 - 200,
        riseTo: Math.random() * 500 + 100,
        left: 49,
        delay: Math.random() * 1000,
      });
    }

    // greenish
    for(let i = 0; i < this.bubbleCount; i++) {
      this.bubbles.push({
        color: this.theme3,
        size: (Math.random() * 13),
        opacity: Math.random(),
        offset: Math.random() * 400 - 200,
        riseTo: Math.random() * 500 + 100,
        left: 51,
        delay: Math.random() * 1000,
      });
    }

    // purple
    for(let i = 0; i < this.bubbleCount; i++) {
      this.bubbles.push({
        color: this.theme2,
        size: (Math.random() * 13),
        opacity: Math.random() * 0.5,
        offset: Math.random() * 400 - 200,
        riseTo: Math.random() * 500 + 100,
        left: 50,
        delay: Math.random() * 1000,
      });
    }
  }

  render() {
    return (
      <div>
        {this.bubbles.map((bubble, index) => (<Bubble {...bubble} key={index}></Bubble>))}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
