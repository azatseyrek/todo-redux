import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggle, deleteTodo} from '../redux/todos/todosSlice';

let filtered = [];

const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  console.log(items);

  if (activeFilter !== 'all') {
    filtered = items.filter((todo) =>
      activeFilter === 'active'
        ? todo.completed === false && todo
        : todo.completed === true && todo,
    );
  } else {
    filtered = items;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? 'completed' : 'false'}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.title}</label>
            <button
              onClick={() => dispatch(deleteTodo(item.id))}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
