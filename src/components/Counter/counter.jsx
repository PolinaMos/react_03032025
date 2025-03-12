import { useCount } from "./use-count";

export const Counter = () => {
  const { count, increment, decrement } = useCount();

  return (
    <span>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </span>
  );
};
