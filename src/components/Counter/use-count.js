import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const COUNT_MAX = 5;
  const COUNT_MIN = 0;

  const increment = () => {
    if (count < COUNT_MAX) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > COUNT_MIN) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
