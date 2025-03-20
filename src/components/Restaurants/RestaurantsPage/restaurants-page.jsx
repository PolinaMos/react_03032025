import { restaurants } from "../../../assets/data/mock.js";
import { useState } from "react";
import { Tab } from "../../Tab/tab.jsx";
import { RestaurantDetails } from "../RestaurantDetails/restaurant-details.jsx";

export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId,
  );

  const handleSetActiveRestaurant = (id) => {
    if (activeRestaurantId === id) {
      return;
    }
    setActiveRestaurantId(id);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {restaurants.map(({ id, name }) => {
          return (
            <div>
              <Tab
                key={id}
                title={name}
                onClick={() => handleSetActiveRestaurant(id)}
                isActive={id === activeRestaurantId}
              />
            </div>
          );
        })}
      </div>
      {activeRestaurant && (
        <RestaurantDetails
          key={activeRestaurantId}
          restaurant={activeRestaurant}
        />
      )}
    </div>
  );
};
