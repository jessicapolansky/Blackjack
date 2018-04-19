$( document ).ready(function() {
    $('#deal-button').click(function () {
        var shuffle = $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        var deck = shuffle.responseJSON;
        console.log(shuffle);
        console.log(deck);

    });
});
