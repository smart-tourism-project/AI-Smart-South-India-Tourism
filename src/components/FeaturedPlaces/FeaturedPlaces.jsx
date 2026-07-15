import "./FeaturedPlaces.css";

import PlaceCard from "../PlaceCard/PlaceCard";


import charminar from "../../assets/charminar.jpg";
import warangal from "../../assets/warangal.jpg";
import tirupati from "../../assets/tirupati.jpg";
import araku from "../../assets/araku.jpg";
import meenakshi from "../../assets/meenakshi.jpg";
import ooty from "../../assets/ooty.jpg";



function FeaturedPlaces(){


const places=[


{
image:charminar,
name:"Charminar",
state:"Telangana",
description:"Historic monument and iconic attraction of Hyderabad."
},


{
image:warangal,
name:"Warangal Fort",
state:"Telangana",
description:"Ancient Kakatiya heritage fort."
},


{
image:tirupati,
name:"Tirupati Temple",
state:"Andhra Pradesh",
description:"Famous spiritual destination."
},


{
image:araku,
name:"Araku Valley",
state:"Andhra Pradesh",
description:"Beautiful hills and nature destination."
},


{
image:meenakshi,
name:"Meenakshi Temple",
state:"Tamil Nadu",
description:"Famous historical temple architecture."
},


{
image:ooty,
name:"Ooty",
state:"Tamil Nadu",
description:"Popular hill station destination."
}


];


return(


<section className="featured">


<h2>
Featured Tourist Places
</h2>


<p>
Explore famous destinations across South India
</p>



<div className="places-container">


{

places.map((place,index)=>(

<PlaceCard

key={index}

image={place.image}

name={place.name}

state={place.state}

description={place.description}

/>

))


}


</div>


</section>


)

}


export default FeaturedPlaces;