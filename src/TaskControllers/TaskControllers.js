import React from 'react';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';

const TaskControllers = ({id, onDelete}) => {
  return (
    <>
      <ButtonEdit id = {id}/>
      <ButtonDelete id = {id} onDelete = {onDelete}/>
    </>
  );
}

TaskControllers.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func,
}

export default TaskControllers;
