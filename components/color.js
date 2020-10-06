import React from 'react';
import Button from './button.js';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [0, 50, 100],
    };
    this.changeColor = this.changeColor.bind(this);
  }
  randomNum() {
    const num = Math.floor(Math.random() * 256);
    return num;
  }
  changeColor() {
    this.setState({
      color: [this.randomNum(), this.randomNum(), this.randomNum()],
    });
    const { color } = this.state;
    document.body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
  }
  isLight() {
    const { color } = this.state;
    return color.reduce((a, c) => a + c, 0) <= (255 * 3) / 2;
  }
  whatColor() {
    const { color } = this.state;
    return `rgb(${color.join(', ')})`;
  }
  render() {
    return (
      <header>
        <h2>The background color is: {this.whatColor()}</h2>
        <Button
          onClick={this.changeColor}
          className={this.isLight() ? 'dark' : 'light'}
        />
      </header>
    );
  }
}

export default Color;
