import "./AIPlanner.css";


function AIPlanner(){


return(

<section className="ai-planner">


<div className="planner-content">


<h2>
Plan Your Trip With AI
</h2>


<p>
Tell us your preferences and AI will create a personalized travel plan.
</p>



<div className="planner-box">


<div className="input-group">

<label>
Destination
</label>

<input 
type="text"
placeholder="Example: Warangal"
/>

</div>



<div className="input-group">

<label>
Number of Days
</label>

<input
type="number"
placeholder="Example: 3"
/>

</div>




<div className="input-group">

<label>
Budget
</label>

<input
type="number"
placeholder="Example: 5000"
/>

</div>





<div className="input-group">

<label>
Travellers
</label>


<select>

<option>
Select
</option>

<option>
Solo
</option>

<option>
Family
</option>

<option>
Friends
</option>

<option>
Students
</option>

</select>


</div>




<div className="input-group">

<label>
Interest
</label>


<select>

<option>
Select Category
</option>

<option>
Historical
</option>

<option>
Temples
</option>

<option>
Nature
</option>

<option>
Shopping
</option>

<option>
Food
</option>


</select>


</div>


<button>

Generate My Trip

</button>


</div>


</div>


</section>


)

}


export default AIPlanner;