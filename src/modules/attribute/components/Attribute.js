import { useAttribute } from "../hooks/attribute.hook";

export function Attribute({ attribute, initialValue, onChange }) {
  const { value, onIncrement, onDecrement } = useAttribute({
    attribute,
    initialValue,
    onChange,
  });
  return (
    <div>
      <h2>{attribute}</h2>
      Value:
      {value}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
