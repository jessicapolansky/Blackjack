$( document ).ready(function() {
    $('#deal-button').click(function () {
        var shuffle = $.get('https://deckofcardsapi.com/api/deck/new/shuffle/?');
        console.log(shuffle.deck_id);
        var deck = shuffle.deck_id
        console.log(shuffle);
        console.log(deck);
    });
    
    $('#hit-button').click(function () {
        var newCard = $.get('https://deckofcardsapi.com/api/gfp1gymo8aej/deck/draw/?count=1');
        console.log(newCard);
    });
    
    
});

