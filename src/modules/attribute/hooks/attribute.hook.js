import { useState } from "react";
export const useAttribute = (options) => {
  const { attribute, initialValue, onChange } = options ?? {};
  const [value, setValue] = useState(initialValue || 0);

  const handleChange = (newValue) => {
    onChange && onChange({ name: attribute, value: newValue });
  };

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    handleChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    handleChange(newValue);
  };

  return {
    value,
    setValue,
    onChange: handleChange,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
  };
};
