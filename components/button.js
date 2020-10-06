import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, className } = this.props;
    console.log(this.props);
    return (
      <div>
        <button onClick={onClick} className={className}>
          Change Background Colour
        </button>
      </div>
    );
  }
}

export default Button;
