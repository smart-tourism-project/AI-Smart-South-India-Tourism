import "./Home.css";
import FeaturedPlaces from "../../components/FeaturedPlaces/FeaturedPlaces";
import AIPlanner from "../../components/AIPlanner/AIPlanner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import LocalBusiness from "../../components/LocalBusiness/LocalBusiness";
import Festivals from "../../components/Festivals/Festivals";
import { Link } from "react-router-dom";


function Home(){

return(

<div className="home">


{/* Hero Section */}

<section className="hero">


<div className="hero-content">


<h1>
Explore South India
<br/>
With AI Smart Tourism
</h1>


<p>

Plan your perfect journey with
AI-powered personalized travel plans

</p>


<Link to="/explore" className="start-btn">
    Start Exploring
</Link>


</div>


</section>





{/* States Section */}

<section className="states">


<h2>
Explore States
</h2>



<div className="state-container">


<div className="state-card">

<h3>
Telangana
</h3>

<p>
Historical places, temples and culture
</p>

<button>
Explore
</button>

</div>



<div className="state-card">

<h3>
Andhra Pradesh
</h3>

<p>
Temples, beaches and nature destinations
</p>

<button>
Explore
</button>

</div>




<div className="state-card">

<h3>
Tamil Nadu
</h3>

<p>
Heritage, temples and traditional tourism
</p>

<button>
Explore
</button>

</div>



</div>


</section>


{/* Categories Section */}

<section className="categories">


<h2>

Explore By Category

</h2>



<div className="category-container">


<CategoryCard

icon="🏰"

title="Historical Places"

description="Explore forts, monuments and heritage locations"

/>



<CategoryCard

icon="🛕"

title="Temples"

description="Discover famous temples and spiritual places"

/>



<CategoryCard

icon="🌳"

title="Nature & Wildlife"

description="Explore forests, waterfalls and valleys"

/>



<CategoryCard

icon="🛍"

title="Shopping"

description="Find local markets and handicrafts"

/>



<CategoryCard

icon="🍛"

title="Food Tourism"

description="Taste traditional South Indian cuisine"

/>



<CategoryCard

icon="🎭"

title="Festivals"

description="Experience cultural festivals"

/>



</div>


</section>
<AIPlanner/>
<HowItWorks/>
<FeaturedPlaces/>
<LocalBusiness />
<Festivals />
{/* Features Section */}


<section className="features">


<h2>
Why Choose AI Smart Tourism?
</h2>


<div className="feature-container">


<div>
🤖
<h3>
AI Trip Planning
</h3>
<p>
Personalized day-wise itinerary
</p>
</div>



<div>
💰
<h3>
Budget Planning
</h3>
<p>
Trips based on your budget
</p>
</div>



<div>
🏨
<h3>
Booking Support
</h3>
<p>
Hotels, guides and local services
</p>
</div>



</div>


</section>


</div>

)

}


export default Home;