import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TaskToggle extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
  };

  state = {
    isChecked: this.props.isCompleted,
  };

  onToggle = (id) => {
    const { onToggleComplete } = this.props;
    this.setState(({ isChecked }) => {
      return { isChecked: !isChecked };
    });
    onToggleComplete(id);
  };

  render() {
    const { id } = this.props;
    const { isChecked } = this.state;
    return (
      <input
        type="checkbox"
        className="toggle"
        id={id}
        checked={isChecked}
        onChange={() => this.onToggle(id)}
      />
    );
  }
}
