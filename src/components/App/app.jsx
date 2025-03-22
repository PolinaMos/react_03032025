import { Layout } from "../Layout/layout.jsx";
import { RestaurantsPage } from "../Restaurants/RestaurantsPage/restaurants-page.jsx";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title="Restaurants App" />
    </Layout>
  );
};
