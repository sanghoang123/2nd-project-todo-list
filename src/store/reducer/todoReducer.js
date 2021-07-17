import storage from '../../util/storage';

import {
  ADD_TODO,
  CANCEL_UPDATE,
  DELETE_TODO,
  MAKE_COMPLETED,
  TOGGLE_EDIT_INDEX,
  UPDATE_TITLE,
} from '../actions/types';

const initialState = {
  todos: storage.get(),
  editIndex: null,
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAKE_COMPLETED:
      const makeComplete = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
      storage.set(makeComplete.todos);
      return makeComplete;
    case ADD_TODO:
      const addTodo = {
        ...state,
        todos: [...state.todos, payload],
      };
      storage.set(addTodo.todos);
      return addTodo;
    case DELETE_TODO:
      const deleteTodo = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
      storage.set(deleteTodo.todos);
      return deleteTodo;
    case TOGGLE_EDIT_INDEX:
      return {
        ...state,
        editIndex: payload,
      };
    case UPDATE_TITLE:
      const updateTitle = {
        ...state,
        todos: state.todos.map((todo) => {
          if (state.editIndex !== null) {
            if (payload) {
              state.todos[state.editIndex].title = payload;
            }
          }
          return todo;
        }),
        editIndex: null,
      };
      storage.set(updateTitle.todos);
      return updateTitle;
    case CANCEL_UPDATE:
      return {
        ...state,
        editIndex: null,
      };
    default:
      return state;
  }
};

export default todoReducer;
