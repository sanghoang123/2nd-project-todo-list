import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

function Header(props) {
  return (
    <header>
      <h1>ToDo List</h1>
      <div className="form-todo">
        <h4>Add An Item</h4>
        <TodoForm />
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
