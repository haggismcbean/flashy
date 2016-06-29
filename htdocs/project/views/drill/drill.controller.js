app.controller('DrillController', [ '$scope', function($scope) {
    var deck = Immutable.List([
    	{
    		front: {
    			title: "1",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "1",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	},
    	{
    		front: {
    			title: "2",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "2",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	},
    	{
    		front: {
    			title: "3",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "3",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	}
    ])

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