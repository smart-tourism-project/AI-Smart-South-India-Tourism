import { createContext, useState } from "react";


export const TripContext = createContext();


export function TripProvider({children}){


    const [tripPlaces,setTripPlaces] = useState(
        JSON.parse(localStorage.getItem("tripPlaces")) || []
    );


    const addToTrip = (place)=>{


        const alreadyExists =
        tripPlaces.some(
            item=>item.id===place.id
        );


        if(alreadyExists){

            return false;

        }


        const updatedTrip=[
            ...tripPlaces,
            place
        ];


        setTripPlaces(updatedTrip);


        localStorage.setItem(
            "tripPlaces",
            JSON.stringify(updatedTrip)
        );


        return true;


    };



    return(

        <TripContext.Provider
        value={{
            tripPlaces,
            addToTrip
        }}
        >

        {children}

        </TripContext.Provider>

    );


}