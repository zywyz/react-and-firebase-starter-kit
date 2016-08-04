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
        <p>
          Counter's below value is stored in redux store. You can increase that value and it
          remains until you reload an app.
        </p>
        <div className="counter">
          {this.props.counter}
        </div>
        <button onClick={this.handleClick} className="btn">Increment</button>
      </div>
    );
  }
}

HomepageView.propTypes = propTypes;
