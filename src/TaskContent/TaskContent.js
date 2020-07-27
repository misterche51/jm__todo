import React from 'react';
import TaskText from '../TaskText/TaskText';
import TaskTimer from '../TaskTimer/TaskTimer';
import PropTypes from 'prop-types';

const TaskContent = ({task, date}) => {
  return (
    <label>
        <TaskText text = {task}/>
        <TaskTimer date = {date}/>
      </label>
  );
}

TaskContent.propTypes = {
  task: PropTypes.string,
  date: PropTypes.arrayOf(PropTypes.number)
}

export default TaskContent;





