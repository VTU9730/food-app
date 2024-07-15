const Card = (props) => {
    const {cloudinaryImageId, avgRatingString, locality, name, cuisines} = props.restaurant.info

    console.log(cloudinaryImageId, avgRatingString, location, name);

    console.log(props.restaurant.info);
    

    // console.log();

    return(
        <div className="card-container">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{avgRatingString} Stars</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default Card;