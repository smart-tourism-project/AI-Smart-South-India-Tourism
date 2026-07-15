import { useState } from "react";

import "./Explore.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import StateSelector from "../../components/StateSelector/StateSelector";
import DistrictSelector from "../../components/DistrictSelector/DistrictSelector";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { places } from "../../data/places";
import { placeImages } from "../../assets/placeImages";
import PlaceCard from "../../components/PlaceCard/PlaceCard";



function Explore() {

    const [selectedState, setSelectedState] = useState("");

    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");
const [searchTerm, setSearchTerm] = useState("");

    const filteredPlaces = places.filter((place) => {

    const stateMatch =
        selectedState === "" ||
        place.state === selectedState;

    const districtMatch =
        selectedDistrict === "" ||
        place.district === selectedDistrict;

    const categoryMatch =
        selectedCategory === "" ||
        place.category === selectedCategory;

    const searchMatch =
        place.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||

        place.district
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||

        place.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    return (

        stateMatch &&
        districtMatch &&
        categoryMatch &&
        searchMatch

    );

});

    return (

        <div className="explore-page">

            <div className="explore-header">

                <h1>Explore South India</h1>

                <p>
                    Discover amazing tourist destinations across South India.
                </p>

            </div>

            <SearchBar

    searchTerm={searchTerm}

    setSearchTerm={setSearchTerm}

/>

            <StateSelector

                selectedState={selectedState}

                setSelectedState={setSelectedState}

                setSelectedDistrict={setSelectedDistrict}

            />

            <DistrictSelector

                selectedState={selectedState}

                selectedDistrict={selectedDistrict}

                setSelectedDistrict={setSelectedDistrict}

            />

            <CategoryFilter
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
/>
<div className="places-section">

    <h2>Popular Tourist Places</h2>

    <div className="places-grid">

        {filteredPlaces.map((place) => (

            <PlaceCard

                key={place.id}

                  id={place.id}
                  
                image={placeImages[place.image]}

                name={place.name}

                state={place.state}

                district={place.district}

                category={place.category}

                rating={place.rating}

                description={place.description}

            />

        ))}

    </div>

</div>
                
            </div>


    );

}

export default Explore;