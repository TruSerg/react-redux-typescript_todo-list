import { ChangeEvent, FC, memo } from "react";

import style from "./styles.module.scss";

interface CustomInputProps {
  type: string;
  value: string;
  name: string;
  placeholder?: string;
  handleFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({
  type,
  value,
  name,
  placeholder,
  handleFieldChange,
}) => {
  return (
    <input
      className={style.input}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleFieldChange}
    />
  );
};

export default memo(CustomInput);
