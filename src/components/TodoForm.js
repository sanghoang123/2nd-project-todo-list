import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addTodo,
  updateTitle,
  cancelUpdate,
} from '../store/actions/todoAction';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
  const [title, setTitle] = useState('');

  const { todos, addTodo, editIndex, updateTitle } = props;

  // func
  const changeTitle = (e) => setTitle(e.target.value);

  const handleKeyCode = (e) => {
    if (editIndex === null) {
      if (e.keyCode === 13 && title !== '') {
        addTodo({ id: uuidv4(), title, completed: false });
        setTitle('');
      }
    }
  };

  useEffect(() => {
    todos.find((todo, index) => {
      if (index === editIndex) setTitle(todo.title);
    });
  }, [editIndex]);

  const handleUpdateTitle = () => {
    updateTitle(title);
    setTitle('');
  };

  const handleCancelUpdate = () => {
    setTitle('');
    cancelUpdate();
  };

  return (
    <div className="row">
      <div className="col-10">
        <div className="form-todo__item">
          <input
            type="text"
            autoFocus
            placeholder="Add your new job and press Enter to finish"
            onChange={changeTitle}
            value={title}
            onKeyUp={handleKeyCode}
          />
        </div>
      </div>
      <div className="col-2">
        <div className="form-todo__item text-end">
          <button className="btn btn--blue" onClick={handleUpdateTitle}>
            UPDATE
          </button>
          <br />
          <button className="btn btn--red" onClick={handleCancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  editIndex: PropTypes.number,
  updateTitle: PropTypes.func.isRequired,
  cancelUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  editIndex: state.todos.editIndex,
});

export default connect(mapStateToProps, { addTodo, updateTitle, cancelUpdate })(
  TodoForm
);
