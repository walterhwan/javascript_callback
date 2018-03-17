const Game = require('./game.js');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const completionCallback = () => {
  reader.question('Would you like to play again?', (res) => {
    if (res === 'yes') {
      Game.run(completionCallback);
    } else {
      reader.close();
    }
  });
};


const game = new Game(reader);
game.run(completionCallback);
