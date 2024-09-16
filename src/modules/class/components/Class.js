import { CLASS_LIST } from "../../../consts";

export function Class({ className, attributes }) {
  const data = CLASS_LIST[className];
  const isMeetMinimums = Object.keys(data).every((attribute) => {
    const value = attributes[attribute];
    return value >= data[attribute];
  });
  return isMeetMinimums ? (
    <h2 style={{ color: "green" }}>{className}</h2>
  ) : (
    <h2 style={{ color: "red" }}>{className}</h2>
  );
}
