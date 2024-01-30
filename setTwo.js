console.log("-->FUNCTIONS 2b HOMEWORK<--");
////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
function multiply(num1, num2, callback) {
  callback(num1 * num2);
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

multiply(4, 3, answer => {
  console.log('Problem 1: The answer is ' + answer) //should console.log 12
})



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
function first(arr, callback) {
  callback(arr[0]);
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('Problem 2: The first name in names is ' + firstName)
})



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
function last(arr, callback) {
  callback(arr[arr.length - 1]);
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('Problem 3: The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
function contains(arr, name, callback) {
  if (arr.includes(name)) {
    callback(true);
  } else {
    callback(false);
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Problem 4: Colt is in the array')
  } else {
    console.log('Problem 4: Colt is not in the array')
  }
})



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
function uniq(arr, callback) {
  let uniqArr = [...new Set(arr)];
  callback(uniqArr);
}

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
uniq(names, function(uniqArr) {
  console.log('Problem 5: The new names array with all the duplicate items removed is ' + uniqArr);
});


////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
function each(names, callback) {
  for(let i = 0; i < names.length; i++) {
    callback(names[i], i);
  }
}

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
each(names, function(item, index) {
  console.log(`Problem 6: The item at index ${index} is ${item}.`);
});




////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// -->CHALLENGE 1 - PARTa<--

/* The outer function, addingFactory, takes one parameter
   (a number) and returns a new function. */
   function addingFactory(x) {
    /* The function that's being returned takes one parameter
       (another number), adds it to the first number, and
       returns the result. */
       return function(y) {
        return x + y;
      };
    }


/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE
/* addTen is a function that adds 10 to the number it receives as a parameter.
     It's created by calling addingFactory with an argument of 10, 
     which means the returned function will always add 10. */
     let addTen = addingFactory(10);


/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE
// Calling addTen with 2, will return 12 (10 + 2)
console.log('Challange 1: ', addTen(2));
  
// Calling addTen with 5, will return 15 (10 + 5)
console.log('Challange 1: ', addTen(5));


/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE
/* addFive is a function that adds 5 to its parameter number. 
     It's created the same way we created addTen, by calling addingFactory with a 5. */
     let addFive = addingFactory(5);
  
     // Adding 5 to 3, will produce the result 8.
     console.log('Challange 1: ', addFive(3));


////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 
/* The function 'getUserById' uses the standard .find() method which loops through an array and
returns the first element for which the provided function returns a truthy value. 
In this case, it's looking for an object with an id that matches the provided id. 
Once it finds that object, it calls the provided callback function with that object as an argument. */

function getUserById(users, id, callback) {
  let user = users.find(user => user.id === id);
  callback(user);
}




// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('Challenge 2: The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})