import { renderHook, act } from "@testing-library/react";
import useCoinCollector from "./useCoinCollector";

test("should return true when there is enough change", () => {
  const { result } = renderHook(() =>
    useCoinCollector({ quarters: 5, dimes: 10, nickels: 3 })
  );

  expect(result.current.enoughChange).toEqual(true);
});

test("should update enoughChange when coins are updated", () => {
  const { result } = renderHook(() =>
    useCoinCollector({ quarters: 5, dimes: 10, nickels: 3 })
  );

  act(() => result.current.setCoins({ quarters: 0, dimes: 0, nickels: 0 }));
  act(() => result.current.setAmount(5));
  expect(result.current.enoughChange).toEqual(false);
});

test("should return false when there is not enough change for a given amount", () => {
  const { result } = renderHook(() =>
    useCoinCollector({ quarters: 5, dimes: 10, nickels: 3 })
  );
  act(() => result.current.setAmount(150));
  expect(result.current.enoughChange).toEqual(false);
});

test("should return true when there is enough change for a given amount", () => {
  const { result } = renderHook(() =>
    useCoinCollector({ quarters: 8, dimes: 10, nickels: 3 })
  );
  act(() => result.current.setAmount(150));
  expect(result.current.enoughChange).toEqual(true);
});
