import React from "react";
import PropTypes from "prop-types";
import TaskToggle from "../TaskToggle/TaskToggle";
import TaskControllers from "../TaskControllers/TaskControllers";
import TaskContent from "../TaskContent/TaskContent";

const TaskItem = ({
  task,
  date,
  id,
  isCompleted,
  onDelete,
  onToggleComplete,
}) => {
  let statusClassNames;
  if (isCompleted) {
    statusClassNames = "completed";
  }

  return (
    <li className={statusClassNames}>
      <div className="view">
        <TaskToggle
          id={id}
          onToggleComplete={onToggleComplete}
          isCompleted={isCompleted}
        />
        <TaskContent task={task} date={date} />
        <TaskControllers id={id} onDelete={onDelete} />
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
