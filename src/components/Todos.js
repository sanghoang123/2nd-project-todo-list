import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    <div className="content">
      <div className="row">
        <div className="col-12">
          <ul className="content__list">
            <TodoItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

Todos.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Todos);
