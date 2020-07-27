import React from 'react';
import PropTypes from 'prop-types';

const ButtonDelete = ({id, onDelete}) => {
  return (
    <button className = "icon icon-destroy" id = {id} onClick = {() => onDelete(id)}/>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func,
}

export default ButtonDelete;
