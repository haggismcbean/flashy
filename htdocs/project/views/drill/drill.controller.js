app.controller('DrillController', [ '$scope', 'deckService', function($scope, deckService) {
    var deck = deckService.getDeck(1).cards;

    var finishedCard = {
        front: {
            "title": "You Have Finished",
            "text": "doop doop dewoop"
        }
    }

    var _ctrl = {
        finishedCard: finishedCard,
        deck: deck,
        isEndOfDeck: false,
        card: deck.shift(),
        correct: Immutable.List([]),
        incorrect: Immutable.List([]),
        answer: answer,
        displayNextCard: displayNextCard,
        displayFinishedCard: displayFinishedCard
    }

    var ctrl = this;

    _.assign(ctrl, _ctrl);

    ctrl.displayNextCard();    

    function answer(isCorrect) {
        if (isCorrect) {
            ctrl.correct = ctrl.correct.push(ctrl.card);
        } else {
            ctrl.incorrect = ctrl.incorrect.push(ctrl.card);
        }

        if (ctrl.deck.size > 0) {
            ctrl.displayNextCard();
        } else {
            ctrl.displayFinishedCard();
        }
    }

    function displayNextCard() {
        ctrl.card = ctrl.deck.first();
        ctrl.deck = ctrl.deck.shift();
    }

    function displayFinishedCard() {
        ctrl.isEndOfDeck = true;
        ctrl.card = ctrl.finishedCard;
    }

}]);