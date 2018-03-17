const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = (el1, el2, cb) => {
  reader.question(`is ${el1} greater then ${el2}?`, (answer) => {
    if (answer === 'yes') {
      cb(true);
    } else {
      cb(false);
    }
  });
};

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, (i + 1), madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  const outerBubbleSortLoop = (madeAnySwaps) => {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };

  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
