const whoWon = require('../RPS.js');

describe("whoWonRPS", function () {
    test("Should return 'TIE!' when player1 and player2 show the same item", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });
    test("Should return 'Player 2 wins!' when player 2 shows a dominant item", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    });
    test("Should return 'Player 2 wins!' when player 2 shows a dominant item", function() {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });
    test("Should return 'Player 2 wins!' when player 2 shows a dominant item", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!');
    });
    test("Should return 'Not a legal move, player 1!' when player 1 shows an item not equal to rock, paper, or scissors", function() {
        let output = whoWon('stick', 'scissors');
        expect(output).toEqual('Not a legal move, player 1!');
    });

});