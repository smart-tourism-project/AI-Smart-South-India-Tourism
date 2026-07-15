import {
Routes,
Route
}
from "react-router-dom";

import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";
import Planner from "../pages/Planner/Planner";
function AppRoutes(){

return(



<Routes>


<Route 
path="/"
element={<Home/>}
/>


<Route
    path="/explore"
    element={<Explore />}
/>


<Route
    path="/place/:id"
    element={<PlaceDetails />}
/>


<Route

path="/planner"

element={<Planner/>}

/>

<Route 
path="/booking"
element={<h1 className="text-4xl text-center mt-20">
Booking Page
</h1>}
/>


<Route 
path="/business"
element={<h1 className="text-4xl text-center mt-20">
Business Page
</h1>}
/>


<Route 
path="/login"
element={<h1 className="text-4xl text-center mt-20">
Login Page
</h1>}
/>


</Routes>



)

}


export default AppRoutes;