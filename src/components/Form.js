import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodoAsync} from '../redux/todos/todosSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addTodoAsync({title}));

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
