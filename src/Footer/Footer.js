import React from 'react';
import Counter from '../Counter/Counter';
import FiltrationList from '../FiltrationList/FiltrationList';
import ClearCompletedButton from '../ClearCompletedButton/ClearCompletedButton';
import PropTypes from 'prop-types';

const Footer = ({todos, onDelete, onCompletedFiltration, onActiveFiltration, renderAll}) => {
  const currentCount = todos.filter(item => item.isCompleted !== true).length;
  const completedTaskId = todos.filter(item => item.isCompleted === true).map(item => item.id);
  return (
    <footer className = "footer">
      <Counter count = {currentCount}/>
      <FiltrationList
        todos = {todos}
        onCompletedFiltration = {onCompletedFiltration}
        onActiveFiltration = {onActiveFiltration}
        renderAll = {renderAll}
      />
      <ClearCompletedButton completed = {completedTaskId} onDelete = {onDelete}/>
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onCompletedFiltration: PropTypes.func,
  onActiveFiltration: PropTypes.func,
  renderAll: PropTypes.func,
}

export default Footer;
