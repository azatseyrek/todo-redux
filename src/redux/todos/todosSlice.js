import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTodos = async () => {
  const res = await fetch('http://localhost:8000/todos');
  return await res.json();
};

// const postTodo = async (data) => {
//   const res = await axios.post('http://localhost:8000/todos', data);
//   return res.data;
// };

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  fetchTodos,
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (todo) => {
    const res = await axios.post('http://localhost:8000/todos', todo);
    return res.data;
  },
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: 'all',
    isLoading: false,
    error: null,
    addNewTodoLoading: false,
    addNewTodoERror: null,
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.items = [
    //     ...state.items,
    //     {id: nanoid('5'), completed: false, title: action.payload},
    //   ];
    // },
    toggle: (state, action) => {
      const id = action.payload;
      const myArr = state.items;
      myArr.filter((todo) =>
        id === todo.id ? (todo.completed = !todo.completed) : '',
      );
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const myArr = state.items;
      myArr.filter((todo) => (id === todo.id ? myArr.pop(todo) : ''));
    },
    changeActiveFilter: (state, action) => {
      const filter = action.payload;
      state.activeFilter = filter;
    },
    clearCompleted: (state) => {
      const myArr = state.items;
      const filtered = myArr.filter((todo) => todo.completed === false);
      state.items = filtered;
    },
  },
  extraReducers: {
    // get todos
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Can not reach the backend data';
    },
    // add todo
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addNewTodoLoading = false;
    },
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodoLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodoLoading = false;
      state.addNewTodoERror = action.error.message;
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.todos.activeFilter;

export const {toggle, deleteTodo, changeActiveFilter, clearCompleted} =
  todosSlice.actions;
export default todosSlice.reducer;
