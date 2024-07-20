import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shiver from './Shiver';

const Body = () => {
  const [restaurantData, setRestarauntData] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState('')

  useEffect(()=>{

    fetchData()

  },[])

  async function fetchData(){

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGl")

    const json = await data.json()

    setRestarauntData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log(searchText)

  if(restaurantData.length == 0){
    return <Shiver />
  }
  
  return (
    <div>
      <div className="search-container">
        <div>
          <input type="search" onChange={(e) => setSearchText(e.target.value)} value = {searchText} />
          <button onClick={()=>{
            const filteredRestaurantData = restaurantData.filter(res => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            setFilteredRestaurant(filteredRestaurantData);
            console.log(filteredRestaurantData)
          }}>Search</button>
        </div>
        <div>
          <button
            onClick={() => {
              const filteredRestaurantData = restaurantData.filter((res) => res.info.avgRating > 4.3);
              setFilteredRestaurant(filteredRestaurantData);
              console.log(filteredRestaurantData)
            }}
          >
            Top Reated Restaurant
          </button>
        </div>
      </div>
      
      <div className="cards-container">
        {filteredRestaurant.map((restaurant) => (
          <div key={restaurant.info.id}>
            {" "}
            <Link to={"restaurant/"+restaurant.info.id}><Card restaurant={restaurant} /></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
