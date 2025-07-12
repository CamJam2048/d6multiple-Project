//JavaScript functions for calculating the  dice rolls

const rollButton = document.getElementById('roll-button');
const diceImage = document.getElementById('dice-image');

rollButton.addEventListener('click', rollDice);


function rollDice() 
{	
	let attacksNumber = document.getElementById('myAttacks').value;
	let diceTarget = document.getElementById('myTarget').value;
	let diceContainer = document.getElementById('dice-container');
	diceContainer.innerHTML='';
	
	var posabilities = [1,2,3,4,5,6];
	
	
	for(let i=0; i < attacksNumber; i++)
	{
		let index = Math.floor(Math.random() * posabilities.length);
		let win = winCalc(posabilities[index], diceTarget);
		
		let imageElement = document.createElement('img');
		
		
		imageElement.class = 'dice-image';
		imageElement.id = 'dice-image';
		imageElement.src = `assets/die${posabilities[index]}${win}.jpg`; 
		imageElement.alt = 'Dice';
		
		
		diceContainer.appendChild(imageElement);
	}
	
}


function winCalc(diceRoll, diceTarget)
{
	if([1,6].includes(diceRoll))
	{
		return '';
	}
	else if(diceRoll < diceTarget)
	{
		return 'L';
	}
	else
	{
		return 'W';
	}
}

