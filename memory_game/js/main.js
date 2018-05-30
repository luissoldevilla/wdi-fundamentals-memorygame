//console.log("Up and running!");

var cards = [
{
card: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png",
},
{
card: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png",
},
{
card: 'king',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png",
},
{
card: 'king',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png",
},
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	} else {
		return;
	}
}


var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement); 
}
}

createBoard();





