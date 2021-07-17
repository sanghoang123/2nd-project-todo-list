import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  makeCompleted,
  deleteTodo,
  toggleEditIndex,
} from '../store/actions/todoAction';

function TodoItem(props) {
  const { todos, makeCompleted, deleteTodo, toggleEditIndex } = props;
  return (
    <Fragment>
      {todos.map((todo, index) => (
        <li key={todo.id} className="content__item">
          <input
            type="checkbox"
            className="content__checkbox"
            checked={todo.completed}
            onChange={makeCompleted.bind(this, todo.id)}
          />
          <h3 className="content__heading">{todo.title}</h3>
          <span
            className="content__icon"
            onClick={toggleEditIndex.bind(this, index)}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className="content__icon"
            onClick={deleteTodo.bind(this, todo.id)}
          >
            <i className="far fa-trash-alt"></i>
          </span>
        </li>
      ))}
    </Fragment>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  makeCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleEditIndex: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, {
  makeCompleted,
  deleteTodo,
  toggleEditIndex,
})(TodoItem);
