import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todos/todosSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(title));

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
    </form>
  );
};

export default Form;
