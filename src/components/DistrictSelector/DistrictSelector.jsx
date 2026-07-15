import "./DistrictSelector.css";

import { locations } from "../../data/locations";

function DistrictSelector({

    selectedState,

    selectedDistrict,

    setSelectedDistrict

}) {

    const districts =

        selectedState

            ? locations[selectedState]

            : [];
            console.log(selectedState);
console.log(districts);

    return (

        <div className="selector">

            <label>Select District</label>

            <select

                value={selectedDistrict}

                onChange={(e) =>

                    setSelectedDistrict(e.target.value)

                }

            >

                <option value="">Choose District</option>

                {

                    districts.map((district) => (

                        <option

                            key={district}

                            value={district}

                        >

                            {district}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}

export default DistrictSelector;