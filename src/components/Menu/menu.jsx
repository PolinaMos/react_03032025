import { Counter } from "../Counter/counter.jsx";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <span>{dish.name}</span>
            <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
};
