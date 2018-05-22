//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

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
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipcard(0);
flipcard(2);





