import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  toggle,
  deleteTodo,
  selectTodos,
  selectFilter,
  getTodosAsync,
} from '../redux/todos/todosSlice';

let filtered = [];

const TodoList = () => {
  const items = useSelector(selectTodos);
  const activeFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);
  const err = useSelector((state) => state.todos.error);
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

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
    <>
      {isLoading ? (
        <h2
          style={{
            marginLeft: '40px',
            fontFamily: 'Helvetica Neue',
            fontSize: '20px',
            color: 'red',
          }}
        >
          Loading...
        </h2>
      ) : (
        <ul className="todo-list">
          {filtered.map((item) => (
            <li
              key={item.id}
              className={item.completed ? 'completed' : 'false'}
            >
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
      )}
    </>
  );
};

export default TodoList;
