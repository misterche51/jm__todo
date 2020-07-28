import React from "react";
import PropTypes from "prop-types";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

const Main = ({
  todos,
  onDelete,
  onToggleComplete,
  renderCompleted,
  renderActive,
  onCompletedFiltration,
  onActiveFiltration,
  renderAll,
}) => {
  return (
    <section className="main">
      <TaskList
        todos={todos}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
        renderCompleted={renderCompleted}
        renderActive={renderActive}
      />
      <Footer
        todos={todos}
        onDelete={onDelete}
        onCompletedFiltration={onCompletedFiltration}
        onActiveFiltration={onActiveFiltration}
        renderAll={renderAll}
      />
    </section>
  );
};
Main.defaultProps = {
  todos: [
    {
      task: "Create ur first task",
      isCompleted: false,
      date: Date.now(),
      id: 0,
    },
  ],
  onDelete: () => {},
  onToggleComplete: () => {},
  onCompletedFiltration: () => {},
  onActiveFiltration: () => {},
  renderAll: () => {},
  renderCompleted: false,
  renderActive: false,
};

Main.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onToggleComplete: PropTypes.func,
  onCompletedFiltration: PropTypes.func,
  onActiveFiltration: PropTypes.func,
  renderAll: PropTypes.func,
  renderCompleted: PropTypes.bool,
  renderActive: PropTypes.bool,
};
export default Main;
