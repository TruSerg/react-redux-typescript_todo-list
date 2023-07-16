import { FC } from "react";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";

import { useCheckboxValueChange } from "../../../../hooks";

import CustomButton from "../../../../commonComponents/CustomButton";
import CustomCheckbox from "../../../../commonComponents/CustomCheckbox";

import style from "./styles.module.scss";

interface TodoItemProps {
  taskText: string;
  taskNumber: number;
  handleTaskDelete: () => void;
  handleEdit: () => void;
}

const TodoItem: FC<TodoItemProps> = ({
  taskText,
  taskNumber,
  handleTaskDelete,
  handleEdit,
}) => {
  const { checkboxValue, handleCheckboxValueChange } =
    useCheckboxValueChange(false);

  const doneTaskStyles = {
    textDecoration: "line-through",
    opacity: "0.5",
  };

  const initialTaskStyles = {
    textDecoration: "none",
    opacity: "1",
  };

  return (
    <div
      style={checkboxValue ? doneTaskStyles : initialTaskStyles}
      className={style.todoItem}
    >
      <div className={style.todoItemDescription}>
        <CustomCheckbox
          checked={checkboxValue}
          handleChange={handleCheckboxValueChange}
        />
        <p className={style.todoItemText}>
          <span className={style.todoItemNumber}>{taskNumber}.</span> {taskText}
        </p>
      </div>

      <div className={style.todoItemButtons}>
        <CustomButton handleClick={handleEdit}>
          <span className={style.todoItemIconEdit}>
            <EditOutlined color="inherit" fontSize="inherit" />
          </span>
        </CustomButton>

        <CustomButton handleClick={handleTaskDelete}>
          <span className={style.todoItemIconDelete}>
            <DeleteOutlineOutlined color="inherit" fontSize="inherit" />
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default TodoItem;
