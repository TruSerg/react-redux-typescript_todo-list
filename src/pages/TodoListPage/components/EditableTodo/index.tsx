import { ChangeEvent, FC, useCallback, useState } from "react";
import { CloseOutlined, DoneOutlined } from "@mui/icons-material";

import CustomInput from "../../../../commonComponents/CustomInput";
import CustomButton from "../../../../commonComponents/CustomButton";

import style from "./styles.module.scss";

interface EditableTodoProps {
  id: string;
  initialText: string;
  handleSave: (updatedTask: any) => void;
}

const EditableTodo: FC<EditableTodoProps> = ({
  id,
  initialText,
  handleSave,
}) => {
  const [editableValue, setEditableValue] = useState(initialText);

  const handleEditTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setEditableValue(value);
  }, []);

  const handleUndoEditTask = useCallback(() => {
    setEditableValue(initialText);
  }, [initialText]);

  const handleEditedTaskSave = useCallback(() => {
    if (editableValue.length > 0) {
      handleSave({ id, newTaskText: editableValue });
    }
  }, [id, editableValue, handleSave]);

  return (
    <div className={style.editTodo}>
      <CustomInput
        type="text"
        name="newTaskText"
        value={editableValue}
        handleFieldChange={handleEditTask}
      />
      <div className={style.editTodoButtons}>
        <CustomButton handleClick={handleEditedTaskSave}>
          <span className={style.editTodoIconSave}>
            <DoneOutlined color="inherit" fontSize="inherit" />
          </span>
        </CustomButton>

        <CustomButton handleClick={() => handleUndoEditTask()}>
          <span className={style.editTodoIconCancel}>
            <CloseOutlined color="inherit" fontSize="inherit" />
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default EditableTodo;
