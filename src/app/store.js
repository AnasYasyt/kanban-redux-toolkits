import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from '../features/kanban/kanbanSlice';

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
