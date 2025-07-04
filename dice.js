//JavaScript functions for calculating the  dice rolls

function 40kDiceGenerator()
{
	// Setting variables to be used for generating dice
	const dice = document.querySelector(".dice");
	const rollValue = Math.floor(Math.random() *6 + 1;
	dice.innerHTML = "";
	
	// Assigning the die color for successful or failed rolls
	const colors = ["#00C4FF", "FF10F0"];
	dice.style.backgroundColor = colors[rollValue - 1];
	
	
	// Building the layout of different die values
	const dotLayouts = {
		1: [{gridArea: 'five'}],
		2: [{gridArea: 'one'}, {gridArea: 'nine'}],
		3: [{gridArea: 'three'}, {gridArea: 'five'}, {gridArea: 'seven'}],
		4: [{gridArea: 'one'}, {gridArea: 'three'}, {gridArea: 'seven'}, 
				{gridArea: 'nine'}],
		5: [{gridArea: 'one'}, {gridArea: 'three'}, {gridArea: 'seven'}, 
				{gridArea: 'five'}, {gridArea: 'nine'}], 
		6: [{gridArea: 'one'}, {gridArea: 'three'}, {gridArea: 'four'},
				{gridArea: 'six'}, {gridArea: 'seven'}, {gridArea: 'nine'}],
	};
	

	const dots = dotLayouts[rollValue];
	if(dots) 
	{
		dots.forEach(dotPosition => {
		const dot = document.createElement("span");
		dot.classLIst.add("dot");
		dot.style.gridArea = dotPosition.gridArea;
		dice.appendChild(dot);
		});
	}		

	console.log("Rolled: " + rollvalue);
}

document.getElementById("dice").addEventListener("click", 40kDiceGenerator);