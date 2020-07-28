import React from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import FiltrationList from "../FiltrationList/FiltrationList";
import ClearCompletedButton from "../ClearCompletedButton/ClearCompletedButton";

const Footer = ({
  todos,
  onDelete,
  onCompletedFiltration,
  onActiveFiltration,
  renderAll,
}) => {
  const currentCount = todos.filter((item) => item.isCompleted !== true).length;
  const completedTaskId = todos
    .filter((item) => item.isCompleted === true)
    .map((item) => item.id);
  return (
    <footer className="footer">
      <Counter count={currentCount} />
      <FiltrationList
        todos={todos}
        onCompletedFiltration={onCompletedFiltration}
        onActiveFiltration={onActiveFiltration}
        renderAll={renderAll}
      />
      <ClearCompletedButton completed={completedTaskId} onDelete={onDelete} />
    </footer>
  );
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCompletedFiltration: PropTypes.func.isRequired,
  onActiveFiltration: PropTypes.func.isRequired,
  renderAll: PropTypes.func.isRequired,
};

export default Footer;
