var dealtCards = [];
// create a deck of cards, no duplicates, range 0 - 51
function drawCard() { 
   let index = Math.floor((Math.random() * 53)-1);
   let cardNotFound = true;
   while(cardNotFound) {
      if(dealtCards.indexOf(index) == -1) {
         dealtCards.push(index);
         cardNotFound = false;
         return index;
      }
   }
}
var dpoints = 0;
var ppoints = 0;


$(document).ready(function(){

   $('#deal-button').click(function(){
      phand = [];
      dcard1 = myDeck[drawCard()];
      dcard2 = myDeck[drawCard()];
      pcard1 = myDeck[drawCard()];
      pcard2 = myDeck[drawCard()];
      dpoints = dcard1.point + dcard2.point
      ppoints = pcard1.point + pcard2.point
      if (ppoints > 21) {
         ppoints == 11;
      }
      $('#dealer-hand').append('<p class="cards">'+ dcard1.code +'</p>');
      $('#dealer-hand').append('<p class="cards">'+ dcard2.code +'</p>');
      $('#player-hand').append('<p class="cards">'+ pcard1.code +'</p>');
      $('#player-hand').append('<p class="cards">'+ pcard2.code +'</p>');
      $('#dealer-points').append('<p class="dpoints">'+ dpoints +'</p>');
      $('#player-points').append('<p class="ppoints">'+ ppoints +'</p>');
      $('#deal-button').hide();
   });
   
   $('#hit-button').click(function(){
      var newCard = myDeck[drawCard()];
      $('.ppoints').remove();
      $('#player-hand').append('<p class="cards">'+ newCard.code +'</p>');
      if (newCard.point == 11 && ppoints > 10) {
         newCard.point == 1;
      }
      ppoints += newCard.point;
      if ((pcard1.point == 11 || pcard2.point == 11) && ppoints > 21) {
         ppoints -= 10;
      }
      $('#player-points').append('<p class="ppoints">'+ ppoints +'</p>');
      if (ppoints > 21) {
         $('#messages').text('GAME OVER. You lose : (');
         $('#hit-button').hide();
         $('#stand-button').hide();
      }
   });
});

$('#stand-button').click(function(){
   var newCard = myDeck[drawCard()];
   console.log(newCard.point);
   $('#hit-button').hide();
   $('.dpoints').remove();
   $('#dealer-hand').append('<p class="cards">'+ newCard.code +'</p>');
   dpoints += newCard.point;
   $('#dealer-points').append('<p class="dpoints">'+ dpoints +'</p>');
   if (dpoints > 21) {
      $('#messages').text('GAME OVER. You Win!');
      $('#stand-button').hide();
   }
   else if (dpoints > ppoints) {
      $('#messages').text('GAME OVER. You lose : (');
      $('#hit-button').hide();
      $('#stand-button').hide();
      
   }
});
   
 $('#new-game').click(function(){
   window.location.reload(true); 
 });


var aceOfHearts = { point: 11, suit: 'Hearts', code: '&#x1F0B1' };
var twoOfHearts = { point: 2, suit: 'Hearts', code: '&#x1F0B2' };
var threeOfHearts = { point: 3, suit: 'Hearts', code: '&#x1F0B3' };
var fourOfHearts = { point: 4, suit: 'Hearts', code: '&#x1F0B4' };
var fiveOfHearts = { point: 5, suit: 'Hearts', code: '&#x1F0B5' };
var sixOfHearts = { point: 6, suit: 'Hearts', code: '&#x1F0B6' };
var sevenOfHearts = { point: 7, suit: 'Hearts', code: '&#x1F0B7' };
var eightOfHearts = { point: 8, suit: 'Hearts', code: '&#x1F0B8' };
var nineOfHearts = { point: 9, suit: 'Hearts', code: '&#x1F0B9' };
var tenOfHearts = { point: 10, suit: 'Hearts', code: '&#x1F0BA' };
var jackOfHearts = { point: 10, suit: 'Hearts', code: '&#x1F0BB' };
var queenOfHearts = { point: 10, suit: 'Hearts', code: '&#x1F0BD' };
var kingOfHearts = { point: 10, suit: 'Hearts', code: '&#x1F0BE' };

var aceOfSpades = { point: 11, suit: 'Spades', code: '&#x1F0A1' };
var twoOfSpades = { point: 2, suit: 'Spades', code: '&#x1F0A2' };
var threeOfSpades = { point: 3, suit: 'Spades', code: '&#x1F0A3' };
var fourOfSpades = { point: 4, suit: 'Spades', code: '&#x1F0A4' };
var fiveOfSpades = { point: 5, suit: 'Spades', code: '&#x1F0A5' };
var sixOfSpades = { point: 6, suit: 'Spades', code: '&#x1F0A6' };
var sevenOfSpades = { point: 7, suit: 'Spades', code: '&#x1F0A7' };
var eightOfSpades = { point: 8, suit: 'Spades', code: '&#x1F0A8' };
var nineOfSpades = { point: 9, suit: 'Spades', code: '&#x1F0A9' };
var tenOfSpades = { point: 10, suit: 'Spades', code: '&#x1F0AA' };
var jackOfSpades = { point: 10, suit: 'Spades', code: '&#x1F0AB' };
var queenOfSpades = { point: 10, suit: 'Spades', code: '&#x1F0AD' };
var kingOfSpades = { point: 10, suit: 'Spades', code: '&#x1F0AE' };

var aceOfDiamonds = { point: 11, suit: 'Diamonds', code: '&#x1F0C1' };
var twoOfDiamonds = { point: 2, suit: 'Diamonds', code: '&#x1F0C2' };
var threeOfDiamonds = { point: 3, suit: 'Diamonds', code: '&#x1F0C3' };
var fourOfDiamonds = { point: 4, suit: 'Diamonds', code: '&#x1F0C4' };
var fiveOfDiamonds = { point: 5, suit: 'Diamonds', code: '&#x1F0C5' };
var sixOfDiamonds = { point: 6, suit: 'Diamonds', code: '&#x1F0C6' };
var sevenOfDiamonds = { point: 7, suit: 'Diamonds', code: '&#x1F0C7' };
var eightOfDiamonds = { point: 8, suit: 'Diamonds', code: '&#x1F0C8' };
var nineOfDiamonds = { point: 9, suit: 'Diamonds', code: '&#x1F0C9' };
var tenOfDiamonds = { point: 10, suit: 'Diamonds', code: '&#x1F0CA' };
var jackOfDiamonds = { point: 10, suit: 'Diamonds', code: '&#x1F0CB' };
var queenOfDiamonds = { point: 10, suit: 'Diamonds', code: '&#x1F0CD' };
var kingOfDiamonds = { point: 10, suit: 'Diamonds', code: '&#x1F0CE' };

var aceOfClubs = { point: 11, suit: 'Clubs', code: '&#x1F0D1' };
var twoOfClubs = { point: 2, suit: 'Clubs', code: '&#x1F0D2' };
var threeOfClubs = { point: 3, suit: 'Clubs', code: '&#x1F0D3' };
var fourOfClubs = { point: 4, suit: 'Clubs', code: '&#x1F0D4' };
var fiveOfClubs = { point: 5, suit: 'Clubs', code: '&#x1F0D5' };
var sixOfClubs = { point: 6, suit: 'Clubs', code: '&#x1F0D6' };
var sevenOfClubs = { point: 7, suit: 'Clubs', code: '&#x1F0D7' };
var eightOfClubs = { point: 8, suit: 'Clubs', code: '&#x1F0D8' };
var nineOfClubs = { point: 9, suit: 'Clubs', code: '&#x1F0D9' };
var tenOfClubs = { point: 10, suit: 'Clubs', code: '&#x1F0DA' };
var jackOfClubs = { point: 10, suit: 'Clubs', code: '&#x1F0DB' };
var queenOfClubs = { point: 10, suit: 'Clubs', code: '&#x1F0DD' };
var kingOfClubs = { point: 10, suit: 'Clubs', code: '&#x1F0DE' };

var myDeck = [
   aceOfHearts,twoOfHearts,threeOfHearts,fourOfHearts,fiveOfHearts,sixOfHearts,sevenOfHearts,
   eightOfHearts,nineOfHearts,tenOfHearts,jackOfHearts,queenOfHearts,kingOfHearts,
   aceOfSpades,twoOfSpades,threeOfSpades,fourOfSpades,fiveOfSpades,sixOfSpades,sevenOfSpades,
   eightOfSpades,nineOfSpades,tenOfSpades,jackOfSpades,queenOfSpades,kingOfSpades,
   aceOfDiamonds,twoOfDiamonds,threeOfDiamonds,fourOfDiamonds,fiveOfDiamonds,sixOfDiamonds,sevenOfDiamonds,
   eightOfDiamonds,nineOfDiamonds,tenOfDiamonds,jackOfDiamonds,queenOfDiamonds,kingOfDiamonds,
   aceOfClubs,twoOfClubs,threeOfClubs,fourOfClubs,fiveOfClubs,sixOfClubs,sevenOfClubs,
   eightOfClubs,nineOfClubs,tenOfClubs,jackOfClubs,queenOfClubs,kingOfClubs
];