// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
// Sample Test Cases
// Input:12

// Output:78


// Input:140

// Output:9870
function SimpleAdding(num) { 
    if (num === 1) {
      return 1;
    }
    else {
      return num + SimpleAdding(num -1);
    }
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  SimpleAdding(readline());