import { useContext, useState } from "react";

import { TripContext } from "../../context/TripContext";

import "./Planner.css";


function Planner(){


    const { tripPlaces } = useContext(TripContext);


    const [days,setDays] = useState("");

    const [budget,setBudget] = useState("");

    const [travelers,setTravelers] = useState("");

    const [travelType,setTravelType] = useState("");

    const [plan,setPlan] = useState([]);



   const generatePlan = ()=>{


    if(tripPlaces.length === 0){

        alert("Please add places to your AI Trip first");

        return;

    }


    if(days === ""){

        alert("Please enter number of days");

        return;

    }



    let generatedPlan=[];


    for(let i=0;i<Number(days);i++){


        const place =
        tripPlaces[i % tripPlaces.length];


        generatedPlan.push({

            day:i+1,

            place:place.name,

            morning:`Visit ${place.name}`,

            afternoon:"Food and sightseeing",

            evening:"Relax and explore nearby places"


        });


    }


    setPlan(generatedPlan);


};

    return(

        <div className="planner-page">


            <h1>
                🤖 AI Smart Trip Planner
            </h1>


            <p>
                Create your personalized travel plan
            </p>



            <div className="selected-places">


                <h2>
                    Selected Places
                </h2>


                {

                tripPlaces.length === 0 ?

                <p>
                    No places selected
                </p>


                :

                tripPlaces.map((place)=>(

                    <div 
                    className="trip-place-card"
                    key={place.id}
                    >

                        <h3>
                            {place.name}
                        </h3>


                        <p>
                            📍 {place.district}, {place.state}
                        </p>


                    </div>

                ))

                }


            </div>


<div className="generated-plan">


<h2>
🤖 Your AI Generated Plan
</h2>



{

plan.map((item)=>(


<div 
className="day-card"
key={item.day}
>


<h3>
Day {item.day}: {item.place}
</h3>


<p>
🌅 Morning:
{item.morning}
</p>


<p>
🌞 Afternoon:
{item.afternoon}
</p>


<p>
🌙 Evening:
{item.evening}
</p>



</div>


))


}



</div>


            <div className="planner-form">


                <h2>
                    Trip Details
                </h2>



                <input

                type="number"

                placeholder="Number of Days"

                value={days}

                onChange={(e)=>setDays(e.target.value)}

                />



                <input

                type="number"

                placeholder="Budget"

                value={budget}

                onChange={(e)=>setBudget(e.target.value)}

                />



                <input

                type="number"

                placeholder="Number of Travelers"

                value={travelers}

                onChange={(e)=>setTravelers(e.target.value)}

                />



                <select

                value={travelType}

                onChange={(e)=>setTravelType(e.target.value)}

                >

                    <option>
                        Select Travel Type
                    </option>

                    <option>
                        Bus
                    </option>

                    <option>
                        Train
                    </option>

                    <option>
                        Car
                    </option>

                    <option>
                        Bike
                    </option>


                </select>



              <button
onClick={generatePlan}
>
Generate AI Plan
</button>



            </div>


        </div>

    );


}


export default Planner;