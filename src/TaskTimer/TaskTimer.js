import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const TaskTimer = ({date}) => {
  return (
    <span className="created" date = {date}>
      {formatDistanceToNow(new Date(date))}
    </span>
  );
}


TaskTimer.propTypes = {
  date: PropTypes.arrayOf(PropTypes.number)
}

export default TaskTimer;
