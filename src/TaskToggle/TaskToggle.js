import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskToggle extends Component {
  static propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    onToggleComplete: PropTypes.func,
  }


  state = {
    isChecked : this.props.isCompleted,
  }

  onToggle = (id) => {
    this.setState(({isChecked}) => {
      return {isChecked: !isChecked}
    });
    this.props.onToggleComplete(id)
  }

  render() {
    const {id} = this.props;
    const {isChecked} = this.state;
    return (
      <input
        type = "checkbox"
        className = "toggle"
        id = {id}
        checked = {isChecked}
        onChange = {() => this.onToggle(id)}>
      </input>
    );
  }
}




