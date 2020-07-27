import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import PropTypes from 'prop-types';

const TaskList = ({todos, onDelete, onToggleComplete, renderCompleted, renderActive}) => {
  const items = todos.map((item) => {
    const {task, id, date, isCompleted} = item;
      return <TaskItem
        task = {task}
        key = {id}
        id = {id}
        date = {date}
        isCompleted = {isCompleted}
        onDelete = {onDelete}
        onToggleComplete = {onToggleComplete}
      />
  })

  const filter = (items, renderCompleted, renderActive) => {
    if (renderCompleted) {
      const completedItems = items.filter(item => item.props.isCompleted);
      return completedItems;
    }
    if (renderActive) {
      const activeItems = items.filter(item => !item.props.isCompleted);
      return activeItems
    } else {
      return items;
    }
  }

  return (
    <ul className = "todo-list">
      {filter(items, renderCompleted, renderActive)}
    </ul>
  );
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onToggleComplete: PropTypes.func,
  renderCompleted: PropTypes.bool,
  renderActive: PropTypes.bool,
}

export default TaskList;
