import React, { Component, PropTypes } from 'react';
import Loader from '../../components/Loader';

const propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default class SubpageView extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.data).length) {
      this.props.getData();
    }
  }
  render() {
    const { data } = this.props;
    let list = [];
    if (Object.keys(data).length) {
      list = Object.keys(data).map((k) => <div key={k} className="list-item">{k} - {data[k]}</div>);
    } else {
      list = <Loader />;
    }
    return (
      <div>
        <h2>
          Subpage
        </h2>
        {list}
      </div>
    );
  }
}

SubpageView.propTypes = propTypes;
