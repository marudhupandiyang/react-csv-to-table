import React from 'react';
import PropTypes from 'prop-types';

class DummyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div/>);
  }
}


DummyComponent.defaultProps = {};

DummyComponent.propTypes = {};

export default DummyComponent;
