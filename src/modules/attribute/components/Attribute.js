import { useAttribute } from "../hooks/attribute.hook";

export function Attribute({ attribute, initialValue }) {
  const { value, modifier, onIncrement, onDecrement } = useAttribute({
    attribute,
    initialValue,
  });

  return (
    <div>
      <h2>{attribute}</h2>
      Value:
      {value} (Modifier: {modifier})<button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
