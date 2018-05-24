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

var flipcard = function(cardId) { 
//		if (cardsInPlay.length === 2) {
//		console.log("You have selected two cards");
//	} 	if (cardsInPlay[0] === cardsInPlay[1]) {
//		alert("You found a match!");
//	} else {
//	alert("Sorry, try again");
//}
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}
flipcard(0);
flipcard(2);





