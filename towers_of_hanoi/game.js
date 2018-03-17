

class TowersOfHanoi {
  constructor(reader) {
    this.towers = [[3, 2, 1], [], []];
    this.reader = reader;
  }

  run(completionCallback) {
    // console.log('answer: ');
    // console.log(this.promptMove(this.move));

    if (this.promptMove(this.move)) {
      if (this.isWon()) {
        console.log("You won the game!");
        completionCallback();
      } else {
        run(completionCallback);
      }
    } else {
      console.log("This is not a valid move");
    }
  }

  promptMove(callback) {
    this.print();
    this.reader.question("Please Enter the tower numbers you want to move from/to?", (nums) => {
      let [startTowerIndex, endTowerIndex] = nums.split(',').map(el => parseInt(el));
      return callback(startTowerIndex, endTowerIndex);
    });
  }

  isValidMove(startTowerIndex, endTowerIndex) {
    let startTower = this.towers[startTowerIndex];
    let endTower = this.towers[endTowerIndex];
    if (startTower.length === 0) {
      return false;
    } else if (endTower.length === 0) {
      return true;
    } else if (startTower[startTower.length - 1] > endTower[endTower.length - 1]) {
      return false;
    } else {
      return true;
    }
  }

  move(startTowerIndex, endTowerIndex) {
    if (this.isValidMove(startTowerIndex, endTowerIndex)) {
      this.towers[endTowerIndex].push(this.towers[startTowerIndex].pop());
      return true;
    } else {
      return false;
    }
  }

  isWon() {
    return this.towers[2].length === 3 || this.towers[1].length === 3;
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }
}

module.exports = TowersOfHanoi;

// let tower = new TowersOfHanoi();
// tower.run(()=>"do you want to play again?");

// tower.move(0, 1);
// tower.print();

// tower.promptMove((a, b) => {
//   console.log(tower.move(a, b));
//   tower.print();
// });
// tower.print();
// console.log(tower.isValidMove(0, 1));
// console.log(tower.isValidMove(0, 2));
// console.log(tower.isValidMove(1, 0));
// console.log(tower.isValidMove(1, 2));
