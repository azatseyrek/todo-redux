import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: 'React',
      },
      {
        id: 2,
        title: 'hello world',
      },
    ],
  },
  reducer: {},
});

export default todosSlice.reducer;
