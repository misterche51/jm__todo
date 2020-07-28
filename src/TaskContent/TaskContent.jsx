import React from "react";
import PropTypes from "prop-types";
import TaskText from "../TaskText/TaskText";
import TaskTimer from "../TaskTimer/TaskTimer";

const TaskContent = ({ task, date }) => {
  return (
    <label>
      <TaskText text={task} />
      <TaskTimer date={date} />
    </label>
  );
};

TaskContent.propTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default TaskContent;
