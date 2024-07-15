import Card from './Card';
import restaurants from './cards';

console.log(restaurants[0])

const CardContainer = () =>{
    return(
        <div className='cards-container'>
            {restaurants.map(restaurant => <Card  restaurant={restaurant} />)}
        </div>
        
    )
}

export default CardContainer;