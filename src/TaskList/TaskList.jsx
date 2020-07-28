import React from "react";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({
  todos,
  onDelete,
  onToggleComplete,
  renderCompleted,
  renderActive,
}) => {
  const items = todos.map((item) => {
    const { task, id, date, isCompleted } = item;
    return (
      <TaskItem
        task={task}
        key={id}
        id={id}
        date={date}
        isCompleted={isCompleted}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
      />
    );
  });

  const filter = (elements, isRenderCompleted, isRenderActive) => {
    if (isRenderCompleted) {
      const completedItems = elements.filter(
        (element) => element.props.isCompleted
      );
      return completedItems;
    }
    if (isRenderActive) {
      const activeItems = elements.filter(
        (element) => !element.props.isCompleted
      );
      return activeItems;
    }
    return elements;
  };

  return (
    <ul className="todo-list">
      {filter(items, renderCompleted, renderActive)}
    </ul>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  renderCompleted: PropTypes.bool.isRequired,
  renderActive: PropTypes.bool.isRequired,
};

export default TaskList;
