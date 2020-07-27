import React from 'react';
import PropTypes from 'prop-types';

const ClearCompletedButton = ({completed, onDelete}) => {
  return (
    <button className ="clear-completed" onClick = {() => completed.forEach(item => onDelete(item))}>Clear completed</button>
  );
}


ClearCompletedButton.propTypes = {
  completed: PropTypes.arrayOf(PropTypes.number),
  onDelete: PropTypes.func,
}

export default ClearCompletedButton;
