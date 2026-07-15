import "./PlaceCard.css";
import { Link } from "react-router-dom";

function PlaceCard({
    id,
    image,
    name,
    state,
    district,
    category,
    rating,
    description
}){

    return (

        <div className="place-card">

            <img
                src={image}
                alt={name}
                className="place-image"
            />

            <div className="place-content">

                <h3>{name}</h3>

                <p className="location">
                    📍 {district}, {state}
                </p>

                <p className="category">
                    🏷 {category}
                </p>

                <p className="rating">
                    ⭐ {rating}
                </p>

                <p className="description">
                    {description}
                </p>

               <Link to={`/place/${id}`} className="explore-btn">
    View Details
</Link>

            </div>

        </div>

    );

}

export default PlaceCard;