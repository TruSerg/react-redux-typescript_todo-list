import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { FormEvent, useCallback } from "react";

import { ITodo } from "../../../services/todo";

import {
  createTask,
  deleteTask,
  saveEditedTask,
  setEditMode,
} from "../../../store/todosSlice";

import { useForm } from "../../../hooks";

import TodoPageLayout from "../components/TodoPageLayout";

const TodoPageContainer = () => {
  const dispatch = useAppDispatch();

  const { taskList } = useAppSelector((state) => state.todos);

  const { formData, handleFormFieldChange, handleFormReset } = useForm({
    taskText: "",
  });

  const handleTaskCreate = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formData.taskText.length > 0) {
        dispatch(createTask(formData.taskText));

        handleFormReset();
      }
    },
    [dispatch, formData]
  );

  const handleTaskDelete = useCallback(
    (taskId: string) => {
      dispatch(deleteTask(taskId));
    },
    [dispatch]
  );

  const handleEditMode = useCallback(
    (taskId: string) => {
      dispatch(setEditMode(taskId));
    },
    [dispatch]
  );

  const handleEditSave = useCallback(
    (updatedTask: ITodo) => {
      dispatch(saveEditedTask(updatedTask));
    },
    [dispatch]
  );

  return (
    <TodoPageLayout
      taskList={taskList}
      taskText={formData.taskText}
      handleTaskCreate={handleTaskCreate}
      handleFormFieldChange={handleFormFieldChange}
      handleTaskDelete={handleTaskDelete}
      handleEditMode={handleEditMode}
      handleEditSave={handleEditSave}
    />
  );
};

export default TodoPageContainer;
