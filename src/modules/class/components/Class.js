import { CLASS_LIST } from "../../../consts";
import { useState } from "react";
import { useAttributes } from "../../app/state/app.context";

export function Class({ className }) {
  const [isActive, setIsActive] = useState(false);
  const attributes = useAttributes();
  const data = CLASS_LIST[className];
  const isMeetMinimums = Object.keys(data).every((attribute) => {
    const value = attributes[attribute];
    return value >= data[attribute];
  });

  return (
    <>
      <h2
        style={{ color: isMeetMinimums ? "green" : "#61DAFB" }}
        onClick={() => setIsActive(!isActive)}
      >
        {className}
      </h2>
      {isActive && (
        <div>
          {Object.keys(data).map((attribute) => (
            <h4>
              {attribute}: {data[attribute]}
            </h4>
          ))}
        </div>
      )}
    </>
  );
}
