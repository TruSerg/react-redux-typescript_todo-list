import { ChangeEvent, FC, memo } from "react";
import { Checkbox } from "@mui/material";

interface CustomCheckboxProps {
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ checked, handleChange }) => {
  return (
    <>
      <Checkbox checked={checked} onChange={handleChange} />
    </>
  );
};

export default memo(CustomCheckbox);
