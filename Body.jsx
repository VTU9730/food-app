import { useState } from "react";
import Card from "./Card";
import restaurants from "./cardsData";

const Body = () => {
  const [restaurantData, setRestarauntData] = useState(restaurants);
  console.log("clicked");
  return (
    <div>
      <button
        onClick={() => {
          const filteredRestaurantData = restaurants.filter((res) => res.info.avgRating > 4.3);
          setRestarauntData(filteredRestaurantData);
          console.log(filteredRestaurantData)
        }}
      >
        Top Reated Restaurant
      </button>
      <div className="cards-container">
        {restaurantData.map((restaurant) => (
          <div key={restaurant.info.id}>
            {" "}
            <Card restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
