import {useState} from "react";
export const useAttribute = (options) => {
  const {initialValue} = options ?? {};
  const [value, setValue] = useState(initialValue || 0);

  const handleIncrement = () => {
    setValue(value + 1);
  }

  const handleDecrement = () => {
    setValue(value - 1);
  }

  return {
    value,
    setValue,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
  }
}
