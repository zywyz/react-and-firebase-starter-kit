import React, { Component, PropTypes } from 'react';

const propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default class HomepageView extends Component {
  handleClick = () => {
    this.props.increment();
  };
  render() {
    return (
      <div>
        <h2>
          Homepage
        </h2>
        <div>
          {this.props.counter}
        </div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

HomepageView.propTypes = propTypes;
