// Write your code below this line.
/*
Given a number, n, return an array containing n unique random numbers between 1 and 10, inclusive.

The numberes in the generated array should never be repeated.

You can trust that this function will never be called with n < 0 or N > 10
*/

// Create a function named getLuckyPicks that accepts one variable, a number, that indicates the number of lucky numbers to generate.
function getLuckyPicks(n){
    // Initialize an empty array to store lucky pics
    let luckyPicks = [];
    // While the array.length is less than n, repeat
    while(luckyPicks.length < n){
        /*
        This line of code is used to generate a random integer between 1 and 10.

        Math.random(): This method generates a random float between 0 (inclusive) and 1 (exclusive).
        Math.random() * 10: This will generate a random float between 0 (inclusive) and 10 (exclusive).
        Math.floor(Math.random() * 10): The Math.floor method rounds down to the nearest integer, so this will yield a random integer between 0 (inclusive) and 9 (inclusive).
        Math.floor(Math.random() * 10) + 1: Finally, adding 1 shifts the range up by one, yielding a random integer between 1 (inclusive) and 10 (inclusive).
        */
        let random = Math.floor(Math.random() * 10) + 1
        /*
        This line of code is checking if a randomly generated number "random" already exists in the array "luckyPicks".

        luckyPicks.indexOf(random): The indexOf() method is used to find the first index at which a given element can be found in the array. If the element is not present in the array, it returns -1.

        if(luckyPicks.indexOf(random) === -1): This condition checks if the generated number "random" is not already present in the "luckyPicks" array. If indexOf returns -1, it means "random" doesn't exist in the array.

        arr.push(random): If the condition luckyPicks.indexOf(random) === -1 is true (meaning "random" is not in "luckyPicks"), then the "random" number is added to the end of the 'arr' array using the push() method.

        So, in essence, this line is ensuring that there are no duplicate numbers in the 'arr' array by not pushing the 'random' number into it if it already exists there.
*/
        if(luckyPicks.indexOf(random) === -1) luckyPicks.push(random);
    }
    return luckyPicks;
}

console.log(getLuckyPicks(6));
console.log(getLuckyPicks(3));
console.log(getLuckyPicks(9));