import React from 'react';
import PropTypes from 'prop-types';

const FiltrationList = ({onCompletedFiltration, onActiveFiltration, renderAll}) => {
  return (
    <ul className = "filters">
      <li><button onClick = {renderAll}>All</button></li>
      <li><button onClick = {onActiveFiltration}>Active</button></li>
      <li><button onClick = {onCompletedFiltration}>Completed</button></li>
    </ul>
  );
}
FiltrationList.propTypes = {
  onCompletedFiltration: PropTypes.func,
  onActiveFiltration: PropTypes.func,
  renderAll: PropTypes.func,
}

export default FiltrationList;
