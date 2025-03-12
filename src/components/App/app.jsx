import { Layout } from "../Layout/layout.jsx";
import { RestaurantList } from "../Restaurants/RestaurantList/restaurant-list.jsx";
import { RestaurantDetails } from "../Restaurants/RestaurantDetails/restaurant-details.jsx";
import { restaurants } from "../../assets/data/mock.js";
import { useState } from "react";

export const App = () => {
  const [activeRestaurant, setRestaurant] = useState(restaurants[0]);
  return (
    <Layout>
      <RestaurantList
        restaurants={restaurants}
        onSelectRestaurant={setRestaurant}
      />
      <RestaurantDetails activeRestaurant={activeRestaurant} />
    </Layout>
  );
};
