console.log(`SIMON SAYS GAME!`)


// BASIC GAME PLAY
	// Simon Says is a game where the player must remember the pattern in which colors appear on the screen and repeat the pattern back to the computer
		// Usually played with four colors, red, green, yellow, blue
		// Colors flash one by one, starting with 4 colors
		// Flash patterns are random, same color can flash more than once
		// Player must repeat the same pattern by clicking on the colors in the order they flashed
		// If the player guesses the wrong sequence, they lose a point
		// If the player guesses the correct sequence, they move on to the next level, which is slightly harder than the level before
		// Game is over when the player is out of points
		// Player will start with 5-10 points or "lives" (will decide if I need to raise the count if the game is too easy)
// THINGS TO CONSIDER
	// How do I make the game progressively more difficult?
		// Make the colors flash in a faster pattern?
		// Maybe start with 2 second holds, and then reduce the time by a tenth each time? 
		// Add more colors?
		// Add more colors AND increase the flash time?
		// Maybe start by increasing the flash time, and then if player passes a certain amount of levels, add another color or two
			// After player passes a certain amount of levels, increase flash time
			// After player passes a certain amount of levels, increase colors...etc

	// let simonSays = ['working']
	// console.log(simonSays)

//  simonSays game variable
	let simonSays = [] 


// userTurn game variable
	let playerSays = []

// playerPoints variable
	let playerPoints = 10

//startButton variable
	let startButton = false	

// Player can not play if game is not on
	let on = false

// flashes the colors of simon sequence in a set interval time
let flashColorsInterval;
let colorFlash;
//shows if player guess is correct or not
let correct;

//shows what level player is on and also correlates to the number of flashes simon will play
let play;

//player wins game
let winGame = false;

// Tried running code but Simon is not defined on line 94, adding a variable for simon here
 	let simon

// simonSays colors
const pink = document.querySelector('#pink')
const purple = document.querySelector('#purple')
const blue = document.querySelector('#blue')
const green = document.querySelector('#green')
const startGame = document.querySelector('#startButton')

// startButton.addEventListener('click', (event) => {
// 	console.log('start button works!')
// })
// start the game play!
startGame.addEventListener('click', (event) => {
	console.log('start game!')
	let startButton = true
	if (startButton === true){
		playSimonSaysGame()
	}
})
// set function for starting game
// create empty array for simon's play, we will push in the order of the colors
const playSimonSaysGame = ()=> {
	console.log(playerPoints)
	winGame = false 
	simonPlay = [];
	playerSays = []; // empty array to be filled with player input
	correct = true; // this will show that player input matches the simon says input
	colorFlash = 0; 
	flashColorsInterval = 0; // this will set the timer that flashes the colors
	play = 1 // this keeps track of the level the player is on 


	for (let i = 0; i < 10; i++){
		simonPlay.push(Math.floor(Math.random() * 4) * 1)
	} // code that loops the order of the colors and puses them into the simonPlay array
	console.log(simonPlay)
	
	flashColorsInterval = setInterval(simonTurn, 900)
	
	simon = true // this means it is the simonSays turn 
}

simonTurn = ()=> {
	on = false // while on is false, player can not play or input 

	if (colorFlash === play) { //color flash is going to b e the number of times a color will flash. it must equal the same number of the playing level. if play level is 3, 3 colors should flash
		clearInterval(flashColorsInterval);
		simon = false; // simon's turn is over and the player's turn begins
		clearColors(); // a function to clear the colors that are flashing on the game
		on = true
	}

	if (simon){
		clearColors(); 
		setTimeout(() => {
			if (simonSays[colorFlash]=== 1) {
				oneColor()}
			if (simonSays[colorFlash]=== 2) {
				twoColors()}
			if (simonSays[colorFlash]=== 3) {
				threeColors()}
			if (simonSays[colorFlash]=== 4) {
				fourColors()}
			colorFlash++;			
		}, 300)
	}
}

clearColors = ()=>{
	pink.style.background = "pink";
	purple.style.background = "purple";
	green.style.background = "lightgreen";
	blue.style.background = "lightblue";
}
// create the functions that flash the colors different colors to indicate which button is being flashed

oneColor = ()=>{
	pink.style.background = "red"
}

twoColors = ()=>{
	purple.style.background = "lavender"
}

threeColors = ()=>{
	green.style.background = "darkgreen"
}

fourColors = ()=>{
	blue.style.background= "darkblue"
}


// player clicks code

pink.addEventListener('click', (event) =>{
	if (on) {
		playerSays.push(1)
		checkTurn();
		oneColor();
		if (winGame === false) {
			setTimeout(() =>{
				clearColors()
			}, 200)
		}
	}
})

purple.addEventListener('click', (event) =>{
	if (on) {
		playerSays.push(2)
		checkTurn();
		twoColors();
		if (winGame === false) {
			setTimeout(() =>{
				clearColors()
			}, 200)
		}
	}
})

green.addEventListener('click', (event) =>{
	if (on) {
		playerSays.push(3)
		checkTurn();
		threeColors();
		if (winGame === false) {
			setTimeout(() =>{
				clearColors()
			}, 200)
		}
	}
})

blue.addEventListener('click', (event) =>{
	if (on) {
		playerSays.push(4)
		checkTurn();
		fourColors();
		if (winGame === false) {
			setTimeout(() =>{
				clearColors()
			}, 200)
		}
	}
})


checkTurn = ()=>{
	if (playerSays[playerSays.length - 1] !== simonSays[playerSays.length - 1]){
		correct = false
	}
}
	if (playerSays.length === 10 && correct){
		playerWins()
	}

	if (correct === false){
		alert(`you got it wrong!`)
		playerPoints--
	}




