import {createSlice, nanoid} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: 'all',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [
        ...state.items,
        {id: nanoid('5'), completed: false, title: action.payload},
      ];
    },
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
  },
});
export const {addTodo, toggle, deleteTodo, changeActiveFilter} =
  todosSlice.actions;
export default todosSlice.reducer;
