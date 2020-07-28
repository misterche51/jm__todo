import React from "react";
import PropTypes from "prop-types";

const ClearCompletedButton = ({ completed, onDelete }) => {
  return (
    <button
      type="button"
      className="clear-completed"
      onClick={() => completed.forEach((item) => onDelete(item))}
    >
      Clear completed
    </button>
  );
};

ClearCompletedButton.defaultProps = {
  onDelete: () => {},
};

ClearCompletedButton.propTypes = {
  completed: PropTypes.arrayOf(PropTypes.number).isRequired,
  onDelete: PropTypes.func,
};

export default ClearCompletedButton;
