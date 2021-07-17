import {
  ADD_TODO,
  CANCEL_UPDATE,
  DELETE_TODO,
  MAKE_COMPLETED,
  TOGGLE_EDIT_INDEX,
  UPDATE_TITLE,
} from './types';

export const makeCompleted = (id) => {
  const makeCompletedAction = (dispatch) => {
    dispatch({
      type: MAKE_COMPLETED,
      payload: id,
    });
  };

  return makeCompletedAction;
};

export const addTodo = (newTodo) => {
  const addTodoAction = (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  };
  return addTodoAction;
};

export const deleteTodo = (id) => {
  const deleteTodoAction = (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return deleteTodoAction;
};

export const toggleEditIndex = (index) => {
  const toggleEditIndex = (dispatch) => {
    dispatch({
      type: TOGGLE_EDIT_INDEX,
      payload: index,
    });
  };

  return toggleEditIndex;
};

export const updateTitle = (newTitle) => {
  const updateTitleAction = (dispatch) => {
    dispatch({
      type: UPDATE_TITLE,
      payload: newTitle,
    });
  };

  return updateTitleAction;
};

export const cancelUpdate = () => (dispatch) => {
  dispatch({
    type: CANCEL_UPDATE,
    payload: null,
  });
};
