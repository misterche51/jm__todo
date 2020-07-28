import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AppInput extends Component {
  static defaultProps = {
    onAdd: () => {},
  };

  static propTypes = {
    onAdd: PropTypes.func,
  };

  state = {
    value: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const { onAdd } = this.props;
    if (value === "") return null;
    onAdd(value);
    this.setState({
      value: "",
    });
    return false;
  };

  onInputChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onInputChange}
          value={value}
        />
      </form>
    );
  }
}
