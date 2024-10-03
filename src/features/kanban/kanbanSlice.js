import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    todo: [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }],
    inProgress: [{ id: 3, name: 'Task 3' }],
    done: [],
  },
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    moveTask: (state, action) => {
      const { taskId, from, to } = action.payload;
      const taskIndex = state.tasks[from].findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const task = state.tasks[from].splice(taskIndex, 1)[0];
        state.tasks[to].push(task);
      }
    },
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        name: action.payload.name,
      };
      state.tasks.todo.push(newTask);
    },
  },
});

export const { moveTask, addTask } = kanbanSlice.actions;
export default kanbanSlice.reducer;
