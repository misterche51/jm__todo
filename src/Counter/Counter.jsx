import React from "react";
import PropTypes from "prop-types";

const Counter = ({ count }) => {
  return <span>{count} items left</span>;
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
