import React from "react";
import PropTypes from "prop-types";

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button
      type="button"
      className="icon icon-destroy"
      id={id}
      aria-label="Delete item"
      onClick={() => onDelete(id)}
    />
  );
};

ButtonDelete.defaultProps = {
  id: null,
  onDelete: () => {},
};

ButtonDelete.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func,
};

export default ButtonDelete;
