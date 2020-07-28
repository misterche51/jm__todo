import React from "react";
import PropTypes from "prop-types";

const FiltrationList = ({
  onCompletedFiltration,
  onActiveFiltration,
  renderAll,
}) => {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={renderAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={onActiveFiltration}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={onCompletedFiltration}>
          Completed
        </button>
      </li>
    </ul>
  );
};
FiltrationList.propTypes = {
  onCompletedFiltration: PropTypes.func.isRequired,
  onActiveFiltration: PropTypes.func.isRequired,
  renderAll: PropTypes.func.isRequired,
};

export default FiltrationList;
