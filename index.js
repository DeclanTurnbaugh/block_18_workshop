// A function called "multiplication" that returns the product of the two input numbers
// When two numbers are input it will multiply them and return
// If any input is not a number it will return "Please provide valid inputs."

let multiplication = (numOne, numTwo) => {
  let isNumber = (val) => typeof val === "number";
  if (isNumber(numOne) && isNumber(numTwo)) {
    return console.log("The sum is: " + numOne * numTwo);
  } else {
    return console.log("Please provide a valid input.");
  }
};

multiplication(12, "false");
multiplication(12, true);
multiplication(12, -14);
multiplication(12, 70);
multiplication(12, false);

// A function called "concatOdds" takes two arrays of integers as arguments.
// It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
// In the event of multiple of the same number, just take one and "throw away" the others
// If inputs aren't arrays return "Please provide valid inputs"
// If the items in the arrays aren't numbers return "Invalid array inputs."

let concatOdds = (arrOne, arrTwo) => {
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    let comboArr = arrOne.concat(arrTwo);

    for (let i = 0; i < comboArr.length; i++) {
      if(typeof comboArr[i] === "number"){
        console.log(typeof comboArr[i]);
        if (comboArr[i] % 2 === 0) {
          comboArr.splice(i, 1);
        }
      } else {
        console.log("Invalid array input.");
        break;
      }
      
    }
    comboArr.sort(function (a, b) {
      return a - b;
    });

    function removeDupes(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    console.log(removeDupes(comboArr));
  } else {
    return console.log("Please provide valid inputs.");
  }
};

concatOdds([1, 2, 3, 4, 5], [-1, 3, 6, 9, 1]);
concatOdds([1, 2, 3, 4, 5], [-1, 3, 6, "balls", 1]);


// A shopping cart checkout feature that allows a user to check out as a guest (without an account), 
// or as a logged-in user. They should be allowed to do either, but should be asked if they want to 
// create an account or log in if they check out as a guest.

// When checking out check to see if they have an account or not, if not ask if they'd like to create one.
// If their cart is empty, they can view the checkout page but obviously not be able to fully check out. If they try to check out, rerout them to the main page and tell them to fill the cart.
// When checking out it should list every item, how many of each item, how much each item is, the total cost. When proceeding it wil ask for information (payment, delivery local, etcetera)
