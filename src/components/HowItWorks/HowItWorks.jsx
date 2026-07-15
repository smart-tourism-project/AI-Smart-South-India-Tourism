import "./HowItWorks.css";


function HowItWorks(){

const steps = [

{
number:"01",
icon:"📍",
title:"Select Destination",
description:"Choose your state, district and favourite tourist places."
},


{
number:"02",
icon:"💰",
title:"Set Budget & Preferences",
description:"Enter budget, travel days, travellers and interests."
},


{
number:"03",
icon:"🤖",
title:"AI Creates Your Plan",
description:"AI generates a personalized day-wise travel itinerary."
},


{
number:"04",
icon:"🏨",
title:"Book & Explore",
description:"Connect with hotels, guides, transport and local businesses."
}

];


return(

<section className="how-section">


<h2>
How AI Smart Tourism Works
</h2>


<p className="how-subtitle">

Plan your journey in four simple steps

</p>



<div className="steps-container">


{

steps.map((step)=>(


<div className="step-card" key={step.number}>


<div className="step-number">

{step.number}

</div>


<div className="step-icon">

{step.icon}

</div>


<h3>

{step.title}

</h3>


<p>

{step.description}

</p>


</div>


))

}


</div>


</section>

)

}


export default HowItWorks;