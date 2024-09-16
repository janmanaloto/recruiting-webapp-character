// import {renderHook} from "@testing-library/react-hooks";
import {useAttribute} from "../../hooks/attribute.hook";
import {act} from "react-dom/test-utils";
import {renderHook} from "@testing-library/react";

describe("useAttribute", () => {
  it("should return the initial value", () => {
    const {result} = renderHook(() => useAttribute({initialValue: 10}));
    expect(result.current.value).toBe(10);
  });

  it("should increment the value", () => {
    const {result} = renderHook(() => useAttribute());
    act(() => {
      result.current.onIncrement();
    });
    expect(result.current.value).toBe(1);
  });

  it("should decrement the value", () => {
    const {result} = renderHook(() => useAttribute());
    act(() => {
      result.current.onDecrement();
    });
    expect(result.current.value).toBe(-1);
  });
});
