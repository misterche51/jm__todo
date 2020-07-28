import React from "react";
import PropTypes from "prop-types";
import AppInput from "../AppInput/AppInput";

const AppHeader = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <AppInput onAdd={onAdd} />
    </header>
  );
};

AppHeader.defaultProps = {
  onAdd: () => {},
};

AppHeader.propTypes = {
  onAdd: PropTypes.func,
};

export default AppHeader;
