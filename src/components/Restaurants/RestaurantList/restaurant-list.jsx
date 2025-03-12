import { useState } from "react";

export const RestaurantList = ({ restaurants, onSelectRestaurant }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "5px",
      }}
    >
      {restaurants.map((restaurant) => (
        <div>
          <button
            key={restaurant.id}
            onClick={() => {
              onSelectRestaurant(restaurant);
              setActiveRestaurant(restaurant.id);
            }}
            style={{
              width: "100%",
              cursor: "pointer",
              padding: "10px",
              border: "solid 1px LightYellow",
              backgroundColor:
                activeRestaurant === restaurant.id ? "Plum" : "Lavender",
            }}
          >
            {restaurant.name}
          </button>
        </div>
      ))}
    </div>
  );
};
