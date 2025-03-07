import { createRoot } from "react-dom/client";
import { restaurants } from "./assets/data/mock.js";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((item) => (
      <div>
        <h2>{item.name}</h2>
        <h3>Меню:</h3>
        <ul>
          {item.menu.map((dish) => (
            <li key={dish.id}>
              <span>{dish.name}</span>
            </li>
          ))}
        </ul>
        <h3>Отзывы:</h3>
        <ul>
          {item.reviews.map((review) => (
            <li key={review.id}>
              <p>
                <i>{review.text}</i>
              </p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>,
);
