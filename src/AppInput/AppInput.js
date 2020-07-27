import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AppInput extends Component {
  static propTypes = {
    onAdd: PropTypes.func,
  }

  state = {
    value: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === '') return null;
    this.props.onAdd(this.state.value);
    this.setState({
      value: ''
    })
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  render() {
    return (
      <form onSubmit = {(e) => this.onFormSubmit(e)}>
        <input className = "new-todo" placeholder = "What needs to be done?" onChange = {this.onInputChange} value = {this.state.value}></input>
      </form>
    );
  }
}