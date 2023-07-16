import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";

import { ITodo } from "../services/todo";

interface todosState {
  taskList: ITodo[];
}

const initialState: todosState = {
  taskList: [],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTask(state, { payload: taskText }) {
      const newTask: ITodo = {
        id: uuidV4(),
        taskText,
        isEditMode: false,
      };
      state.taskList = [newTask, ...state.taskList];
    },
    deleteTask(state, { payload: taskId }) {
      const removeTask = state.taskList.findIndex((task) => task.id === taskId);
      state.taskList.splice(removeTask, 1);
    },
    setEditMode(state, { payload: taskId }) {
      state.taskList = state.taskList.map((task) => ({
        ...task,
        isEditMode: taskId === task.id ? true : task.isEditMode,
      }));
    },
    saveEditedTask(state, { payload }) {
      const { id, newTaskText } = payload;

      state.taskList = state.taskList.map((task) => {
        const isTaskToUpdate = task.id === id;

        return {
          ...task,
          taskText: isTaskToUpdate ? newTaskText : task.taskText,
          isEditMode: isTaskToUpdate ? false : task.isEditMode,
        };
      });
    },
  },
});

export const { createTask, deleteTask, setEditMode, saveEditedTask } =
  todosSlice.actions;

export default todosSlice.reducer;
