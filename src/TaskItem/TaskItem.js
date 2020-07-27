import React from 'react';
import TaskToggle from '../TaskToggle/TaskToggle';
import TaskControllers from '../TaskControllers/TaskControllers';
import TaskContent from '../TaskContent/TaskContent';
import PropTypes from 'prop-types';

const TaskItem = ({task, date, id, isCompleted,  onDelete, onToggleComplete}) => {
  let statusClassNames;
  if (isCompleted) {
    statusClassNames = 'completed';
  }

  return (
    <li className = {statusClassNames}>
      <div className = "view">
        <TaskToggle id = {id} onToggleComplete = {onToggleComplete} isCompleted = {isCompleted} />
        <TaskContent task = {task} date = {date} />
        <TaskControllers id = {id} onDelete = {onDelete} />
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  isCompleted: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggleComplete: PropTypes.func,
}

export default TaskItem;
