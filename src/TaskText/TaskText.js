import React from 'react';
import PropTypes from 'prop-types';

const TaskText = ({text}) => {
  return (
    <span className ="description">{text}</span>
  );
}

TaskText.propTypes = {
  text: PropTypes.string,
}

export default TaskText;
