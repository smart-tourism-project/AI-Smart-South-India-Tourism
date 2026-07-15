import { useParams, useNavigate } from "react-router-dom";
import { places } from "../../data/places";
import { placeImages } from "../../assets/placeImages";
import { placeDetails } from "../../data/placeDetails";
import { nearbyFacilities } from "../../data/nearbyFacilities";
import { placeLocation } from "../../data/placeLocation";

import "./PlaceDetails.css";
import FacilityCard from "../../components/FacilityCard/FacilityCard";
import { useContext } from "react";
import { TripContext } from "../../context/TripContext";


function PlaceDetails() {

    // Get the place id from the URL
    const { id } = useParams();
    const navigate = useNavigate();
const {addToTrip}=useContext(TripContext);


    // Find the selected place
    const place = places.find(
        (item) => item.id === Number(id)
    );

    // If place doesn't exist
     if (!place) {
        return <h1>Place Not Found</h1>;
    }

    const details = placeDetails[place.id];
    const facilities = nearbyFacilities[place.id];
    const location = placeLocation[place.id];
    const handleAddToTrip = () => {

    // Get existing trip
    const existingTrip =
        JSON.parse(localStorage.getItem("tripPlaces")) || [];

    // Check if already added
    const alreadyExists =
        existingTrip.some(item => item.id === place.id);

    if (alreadyExists) {

        alert("This place is already added to your trip.");

        return;
    }

    // Add the current place
    existingTrip.push(place);

    // Save back to localStorage
    localStorage.setItem(
        "tripPlaces",
        JSON.stringify(existingTrip)
    );

    alert(`${place.name} added to your AI Trip!`);

};
    return (

        <div className="place-details">
            <button
    className="back-btn"
    onClick={() => navigate("/explore")}
>
    ← Back to Explore
</button>

            {/* Hero Image */}

            <div className="details-image-container">

                <img
                    src={placeImages[place.image]}
                    alt={place.name}
                    className="details-image"
                />

            </div>

            {/* Information */}

            <div className="details-content">

                <h1 className="place-name">
                    {place.name}
                </h1>

                <p className="rating">
                    ⭐ {place.rating}
                </p>

                <p className="location">
                    📍 {place.district}, {place.state}
                </p>

                <p className="category">
                    🏷 {place.category}
                </p>

                <h2>
                    About this Destination
                </h2>

                <p className="description">
                    {details.description}
                </p>
              <h2>Nearby Facilities</h2>

<div className="facilities-grid">

    <FacilityCard
        title="🏨 Hotels"
        facilities={facilities.hotels}
    />

    <FacilityCard
        title="🍽 Restaurants"
        facilities={facilities.restaurants}
    />

    <FacilityCard
        title="🚗 Rentals"
        facilities={facilities.rentals}
    />

    <FacilityCard
        title="🏥 Hospitals"
        facilities={facilities.hospitals}
    />

    <FacilityCard
        title="⛽ Petrol Pumps"
        facilities={facilities.petrolPumps}
    />

</div>

              <button
className="trip-btn"
onClick={()=>{

const added=addToTrip(place);


if(added){

alert(
`${place.name} added to your AI Trip ✅`
);

}
else{

alert(
`${place.name} is already added`
);

}

}}

>

🤖 Add To AI Trip

</button>

            </div>

        </div>

    );

}

export default PlaceDetails;