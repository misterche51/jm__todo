import React from 'react';
import AppInput from '../AppInput/AppInput';
import PropTypes from 'prop-types';

const AppHeader = ({onAdd}) => {
  return (
   <header className = "header">
     <h1>todos</h1>
     <AppInput onAdd = {onAdd}/>
   </header>
  );
}

AppHeader.propTypes = {
  onAdd: PropTypes.func,
}

export default AppHeader;
