import React from "react";
import PropTypes from "prop-types";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

const TaskControllers = ({ id, onDelete }) => {
  return (
    <>
      <ButtonEdit id={id} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </>
  );
};

TaskControllers.defaultProps = {
  onDelete: () => {},
};

TaskControllers.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

export default TaskControllers;
