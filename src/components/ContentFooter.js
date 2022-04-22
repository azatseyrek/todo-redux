import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {changeActiveFilter} from '../redux/todos/todosSlice';

const ContentFooter = () => {
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  const itemsLeft = items.filter((item) => !item.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${itemsLeft} `}</strong>
        {itemsLeft > 1 ? 'items left' : 'item left'}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('all'))}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('active'))}
            href="#/"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'completed' ? 'selected' : ''}
            href="#/"
            onClick={() => dispatch(changeActiveFilter('completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ContentFooter;
