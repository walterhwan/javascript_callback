const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {

  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  } else {
    reader.question("Please enter a number", (number) => {
      addNumbers((sum+parseInt(number)), (numsLeft-1), completionCallback);
    });
  }
};

addNumbers(0, 6, sum => console.log(`Total Sum: ${sum}`));
