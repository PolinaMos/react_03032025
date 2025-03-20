import { Menu } from "../../Menu/menu.jsx";
import { Reviews } from "../../Reviews/reviews.jsx";

export const RestaurantDetails = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div
      style={{
        height: "calc(100vh - 160px)",
      }}
    >
      <div
        style={{
          width: "400px",
          margin: "0 auto",
        }}
      >
        <h2>{name}</h2>
        <Menu menu={menu} />
        {reviews.length ? <Reviews reviews={reviews} /> : "Not review yet"}
      </div>
    </div>
  );
};
