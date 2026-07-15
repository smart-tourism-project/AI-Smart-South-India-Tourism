import "./StateSelector.css";

import { locations } from "../../data/locations";

function StateSelector({

    selectedState,

    setSelectedState,

    setSelectedDistrict

}) {

    return (

        <div className="selector">

            <label>Select State</label>

            <select

                value={selectedState}

                onChange={(e) => {

                    setSelectedState(e.target.value);

                    setSelectedDistrict("");

                }}

            >

                <option value="">Choose State</option>

                {

                    Object.keys(locations).map((state) => (

                        <option

                            key={state}

                            value={state}

                        >

                            {state}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}

export default StateSelector;