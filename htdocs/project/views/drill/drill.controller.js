app.controller('DrillController', [ '$scope', function($scope) {
    var deck = [
    	{
    		front: {
    			title: "Front",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "Back",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	},
    	{
    		front: {
    			title: "2Front",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "2Back",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	},
    	{
    		front: {
    			title: "3Front",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		},
    		back: {
    			title: "3Back",
    			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		}
    	}
    ]

    var finishedCard = {
        front: {
            "title": "You Have Finished",
            "text": "doop doop dewoop"
        }
    }

    var _this = {
    	deck: deck,
        finishedCard: finishedCard,
        isEndOfDeck: false,
        card: deck.shift(),
        correct: [],
        incorrect: [],
        answer: answer,
        displayNextCard: displayNextCard,
        displayFinishedCard: displayFinishedCard
    }

    _.assign(this, _this);

    function answer(isCorrect) {
        if (isCorrect) {
            this.correct.push(this.card);
        } else {
            this.incorrect.push(this.card);
        }

        if (this.deck.length > 0) {
            this.displayNextCard();
        } else {
            this.displayFinishedCard();
        }
    }

    function displayNextCard() {
        this.card = this.deck.shift();
    }

    function displayFinishedCard() {
        this.isEndOfDeck = true;
        this.card = this.finishedCard;
    }

}]);