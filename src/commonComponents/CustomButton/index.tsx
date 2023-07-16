import { FC, memo, ReactNode } from "react";

import style from "./styles.module.scss";

interface CustomButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  type,
  handleClick,
}) => {
  return (
    <button className={style.btn} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default memo(CustomButton);
