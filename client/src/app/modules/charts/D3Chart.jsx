import React, { Component, PropTypes } from 'react';

class D3Chart extends Component {

  constructor() {
    super();
    this._isMounted = false;
    this._chart = undefined;
  }

  propTypes: {
    Chart: PropTypes.object,
    chartOpts: PropTypes.object
  };

  shouldComponentUpdate() {
    return !this._isMounted;
  }

  componentDidMount() {
    const { Chart, data, chartOpts } = this.props;
    this._isMounted = true;

    this._chart = new Chart(this._ele, data, chartOpts);
    this._chart.render();
  }

  componentWillUpdate() {
    this._chart.render();
  }

  render() {
    return <div ref={(ele) => this._ele = ele}></div>;
  }
}

export default D3Chart;

