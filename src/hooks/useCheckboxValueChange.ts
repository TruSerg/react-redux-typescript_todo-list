import { ChangeEvent, useCallback, useState } from "react";

const useCheckboxValueChange = (initialValue: boolean) => {
  const [checkboxValue, setCheckboxValue] = useState(initialValue);

  const handleCheckboxValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCheckboxValue(e.target.checked);
    },
    []
  );

  return { checkboxValue, handleCheckboxValueChange };
};

export default useCheckboxValueChange;
