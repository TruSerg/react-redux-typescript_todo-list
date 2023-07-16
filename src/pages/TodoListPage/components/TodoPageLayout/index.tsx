import { ChangeEvent, FC, FormEvent } from "react";
import { AddSharp } from "@mui/icons-material";

import { ITodo } from "../../../../services/todo";

import Container from "../../../../commonComponents/Container";
import CustomButton from "../../../../commonComponents/CustomButton";
import CustomInput from "../../../../commonComponents/CustomInput";
import TodoItem from "../TodoItem";
import EditableTodo from "../EditableTodo";

import style from "./styles.module.scss";
import NoTodos from "../../../../commonComponents/NoTodosComponent";

interface TodoPageLayoutProps {
  taskList: ITodo[];
  taskText: string;
  handleFormFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTaskCreate: (e: FormEvent<HTMLFormElement>) => void;
  handleTaskDelete: (taskId: string) => void;
  handleEditMode: (taskId: string) => void;
  handleEditSave: (updatedTask: ITodo) => void;
}

const TodoPageLayout: FC<TodoPageLayoutProps> = ({
  taskList,
  taskText,
  handleTaskCreate,
  handleFormFieldChange,
  handleTaskDelete,
  handleEditMode,
  handleEditSave,
}) => {
  return (
    <div className={style.main}>
      <Container>
        <div className={style.mainFormArea}>
          <form className={style.mainForm} onSubmit={handleTaskCreate}>
            <CustomInput
              value={taskText}
              type="text"
              name="taskText"
              placeholder="Add task..."
              handleFieldChange={handleFormFieldChange}
            />
            <CustomButton type="submit">
              <span className={style.mainFormIconBtn}>
                <AddSharp color="inherit" fontSize="inherit" />
              </span>
            </CustomButton>
          </form>
        </div>

        {taskList.length > 0 ? (
          <div className={style.mainTodosArea}>
            {taskList.map((task, i) => {
              return task.isEditMode ? (
                <EditableTodo
                  key={task.id}
                  id={task.id}
                  initialText={task.taskText}
                  handleSave={handleEditSave}
                />
              ) : (
                <TodoItem
                  key={task.id}
                  taskText={task.taskText}
                  taskNumber={i + 1}
                  handleTaskDelete={() => handleTaskDelete(task.id)}
                  handleEdit={() => handleEditMode(task.id)}
                />
              );
            })}
          </div>
        ) : (
          <NoTodos />
        )}
      </Container>
    </div>
  );
};

export default TodoPageLayout;
