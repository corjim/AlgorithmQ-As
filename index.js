
// " Create a function that takes an integer as an argument and returns 'Evens' for even numbers or 'Odd' for odd numbers.
const oddOrEvenNumber = (num) => {
    // Take a number and returns

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}


// Return the number(count) of vowels in the given string. We will consider a, e, i, o, u as vowels for the kata. The input will only consist of lowercase letters and/or spaces.
const vowels = (str) => {
    let vowelsCount = 0;
    const arr = str.split('').toLowerCase();
    for (let x = 0; x < str.length; x++) {
        if (arr[x] === "a") {
            vowelsCount++;
        } else if (arr[x] === "e") {
            vowelsCount++;
        } else if (arr[x] === "i") {
            vowelsCount++;
        } else if (arr[x] === "o") {
            vowelsCount++;

        } else if (arr[x] === "u") {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

// Jenny'a message
function greet(name) {

    if (name === "Johnny") {
        return "Hello my love"
    } else {
        return "Hello" + name + "!";
    }
}

// Create a function that checks if a number n is divisible by x AND y. All input are positive and non-zero digits.
const isDivisible = (num, x, y) => {

    // For edge cases
    if (x === 0 || y === 0) return false

    if (num % x === 0 && num % y === 0) {
        return true
    } else {
        return false;
    }
}


// In the simplest assignment you are given a number and have to make it negative. But maybe the number is already negative.
const makeNegative = (num) => {
    if (num < 0) {
        return num;
    } else {
        return num * -1;
    }
}


// GIven an array of integers your solution should find the smallest integers.

const findSmallestInt = (arraysOfNums) => {

    let smallestNum = arraysOfNums[0]; // start at the first index.

    for (let i = 0; i < arraysOfNums.length; i++) {
        const arrNum = arraysOfNums[i];

        if (arrNum < smallestNum) {
            smallestNum = arrNum
        }
    }
    return smallestNum;
} // findSmallestInt([299,6,32,7]) //6



// Write a program that finds the summation of every number 1 to num. The number will always be a positive integer greater than 0




// Task
// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}


// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
var min = function (list) {

    let min = list[0];

    for (let i = 0; i < list.length; i++) {
        const smallest = list[i];
        if (smallest < min) {
            min = smallest;
        }
    }

    return min;
}

var max = function (list) {

    let max = list[0];

    for (let i = 0; i < list.length; i++) {
        const largest = list[i];
        if (largest > max) {
            max = largest;
        }
    }

    return max;
}

var min = list => Math.min(...list),
    max = list => Math.max(...list);

//another solution

var min = function (list) {
    let min = list[0];
    for (let i of list) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}

var max = function (list) {
    let max = list[0];
    for (let i in list) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}


// Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = (n) => {
    const results = [];

    // loop thru n in a reserve manner
    for (let i = n; i >= 1; i--) {
        results.push(i)
    }
    return results;
};


// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const squared = numbers[i] * numbers[i]; // or Math.pow(numbers[i], 2)
        sum += squared;
    }
    return sum;
}


// Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
    return b.toString();
}

function booleanToString(b) {
    return b ? 'true' : 'false';
}


// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here

    let total = 0;

    for (let i = 0; i < classPoints.length; i++) {

        total += classPoints[i]
    }

    const classAvg = total / classPoints.length;

    return yourPoints > classAvg;
}


// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]

function maps(x) {

    const results = [];

    for (let i = 0; i < x.length; i++) {
        const doubled = x[i] * 2;
        results.push(doubled)
    }
    return results;

}

function maps(x) {
    return x.map(num => num * 2)
}


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO

    const totalDistanceToPump = mpg * fuelLeft;

    if (totalDistanceToPump >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

const zeroFxuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd"
    }
}

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


// its pretty straightforward. Your goal is to create a function that removes the first characters of a string. You're given one parameter, the original string. You dnt have to worry with the strings with less than two characters.
function removeChar(str) {
    let choppedStr = "";

    console.log("this is chopdstr", choppedStr)

    for (let i = 1; i < str.length - 1; i++) {

        console.log("this iiii", str[i])
        choppedStr += str[i];
    }

    return choppedStr;
}

const removeChar = str => str.slice(1, -1);

// Write a function called repeat_str which repeats the given string src exactly count times.
function repeat_str(n, s) {

    let repeatStr = '';
    for (let i = 0; i < n; i++) {
        repeatStr = repeatStr + s
    }
    return repeatStr;

}

// Write a function to split a string and convert it into an array of words.
function manualSplit(str) {
    const words = [];
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char !== " ") {
            currentWord += char;
        } else {
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = "";
            }
        }
    }

    // Push the last word if it exists
    if (currentWord.length > 0) {
        words.push(currentWord);
    }

    return words;
}


// I'm new to coding and now I want to get the sum of two arrays..actually the sum of all their elements. P.S Each arrays includes only integers numbers.
function arrayPlusArray(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];

        const addedValue = arr1Value + arr2Value

        sum = sum + addedValue
    }

    return sum;
}

// The century spans from the year 1 up to and including the year 100. The second from the year 101 up to and including the year 200 etc. Given a year, return the century it is in.

function centuryFromYear(year) {
    // Divide year by 100
    let century = parseInt(year / 100);

    // If it's an exact hundred, return it
    if (year % 100 === 0) {
        return century;
    } else {
        // Otherwise, add 1 to move to next century
        return century + 1;
    }
}

function century(year) {
    return Math.ceil(year / 100)
}


// I have a cat and dog. I got them at the same time as the kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears, catYears, dogYears].

// humanYear >= 1
// humanYear are whole numbers only

//Cat years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that.

// Dog years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that.


