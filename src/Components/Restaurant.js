import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Shiver from "./Shiver";

const Restaurant = () => {

    const [resInfo, setResInfo] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        fetchRestaurant()
    },[])

    const fetchRestaurant = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4643489&lng=78.3755955&restaurantId="+id)
        const json = await data.json()
        setResInfo(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    }
    // const {name, avgRating, locality, costForTwoMessage} = resInfo || {}
   
    // if(resInfo === null) return <Shiver />
        console.log(resInfo);
    return(
        <div>
            <h1>{resInfo?.card?.card?.card?.text}</h1>
            {/* <h1>{name}</h1>
            <h1>{locality}</h1>
            <h2>{avgRating}</h2>
            <h3>{costForTwoMessage}</h3> */}
        </div>
    )
}

export default Restaurant;