
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

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if (humanYears > 2) {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
};
// Given a string, return true if the string is a palidrome or false if it is not. Palidrome are strings that form the same word if it is reversed.
// palidrome("kayak") == true
// palidrome(madam) == true
function palidrome(word) {
    let reserveStr = "";
    for (char of word) {
        // str = str + char;
        reserveStr = char + reserveStr;
    }
    return reserveStr === word;


    // const reversed = word.split("").reverse().join("")
    // return word === reversed;
}


// Given a string, return a new string with the reversed order of the characters.
// Examples reverse("hello") === "olleh"
function reverse(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr;

    // return str.split("").reverse().join("") using the build in function.
}

function reverse(str) {
    let reverseStr = "";
    for (let char of str) {
        console.log(char)
        reverseStr = char + reverseStr
    }
    return reverseStr;

    // Example Walkthrough: Suppose str = "abc"
    // Start: reverseStr = ""
    // First loop: char = "a"
    // reverseStr = "a" + "" = "a"
    // Second loop: char = "b"
    // reverseStr = "b" + "a" = "ba"
    // Third loop: char = "c"
    // reverseStr = "c" + "ba" = "cba"

}

// Given a string, return the character that is most commonly used in the string.
// maxChar("sbdddrd") ==> d
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }
    }
    for (let key in charMap) {
        console.log(key, ":", charMap[key]); // A : 2 
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key
        }
        return maxChar;
    }

    return maxChar;
    // OLD SYNTAX
    // for(const [key, value] of Object.entries(charMap)){
    //     console.log(key, value);
    //     if(value > max){
    //         max = value;
    //         maxChar = key
    //     }
    // }

}

// Given an array and chunk size, divide the array into many subarrays where each array is of the length size.
// chunk([1,2,3,4], 2) ==> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) ==> [[1,2], [3,4], [5]]

function chunk(array, size) {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;

    }
    return result;
}

function chunkForLoop(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = [];
        for (let j = i; j < i + size && array.length; j++) {
            chunk.push(array[j]);
        }
        console.log(i)
        result.push(chunk)
    }
    return result;

    // array = [1, 2, 3, 4, 5, 6, 7];
    //size = 3;

    // Iteration 1(i = 0):
    //     j = 0 → chunk = [1]
    //     j = 1 → chunk = [1, 2]
    //     j = 2 → chunk = [1, 2, 3]
    //     result = [[1, 2, 3]]

    // Iteration 2(i = 3):
    //     j = 3 → chunk = [4]
    //     j = 4 → chunk = [4, 5]
    //     j = 5 → chunk = [4, 5, 6]
    //     result = [[1, 2, 3], [4, 5, 6]]

    // Iteration 3(i = 6):
    //     j = 6 → chunk = [7]
    //     result = [[1, 2, 3], [4, 5, 6], [7]]

}


// Write a function that accepts a string. The function should return capitalize letter of each word in the string then return return the capitalized string.
// capitalize("boy love girl") ==. "Boy Love Girl"
function capitalize(str) {
    const words = str.split(" "); //Turn the strings to array
    // "boy love girl"
    // ['boy', 'love', 'girl']

    const resultStr = [];
    for (char of words) { // loop thru word lik b..o..y
        resultStr.push(char[0].upperCase() + char.slice(1))
    }
    return resultStr.join(" ")

    //USING THE MAP METHOD
    // return words.map(word => word[0].toUpperCase() + word.slice[1]).join(" ")
}



// Write a function that returns the number of vowels used in a string.
// vowels("encounter love") ==> 6
function vowels(str) {
    let count = 0;
    //const word = str.split(" ")

    for (let vowel of str.toLowerCase()) {

        console.log(vowel)
        if (vowel == "a" || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
            count++;
        }
    }
    return count;

    //USING REGULAR EXPRESSION

    // const matches = str.match(/[aeiou]/gi) // g means go thru all the express(aeiou) and i means case sensitvity.
    // return matches ? matches.length : 0;
}

function countVowelsLoop(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // to handle uppercase vowels
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }

    return count;
}


// Write a program that console log the numbers from 1 to n. But for multiples of three print "Fizz" instead of the number and for the muliples of five print "Buzz". For numbers which are multiples of both three and five print "fizzbuzz"
// fizzbuzz(5) ==> 1 2 fizz 4 buzz
function fizzbuzz(n) {
    for (let i = 1; i < n; i++) {

        if (i % 3 == 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}


// Given a non-empty array of integers, return the result of multiplying the values together in order
function grow(arr) {

    let results;

    for (i = 0; i < arr.length; i++) {

        const arrProduct = arr[i]

        results *= arrProduct
    }

    return results;
}


// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

function points(games) {
    let totalScore = 0;

    games.map((g) => {
        const scoreValue = g.split(":");
        const x = Number(scoreValue[0]);
        const y = Number(scoreValue[1]);

        if (x > y) {
            totalScore += 3;
        } else if (x === y) {
            totalScore += 1;
        }
    });

    return totalScore;
}


// eliminating the split method
function points(games) {
    // Declare a base point.
    let totalScore = 0

    // map thru the array of scores
    games.map((g) => {
        const x = g[0];
        const y = g[2];
        if (x > y) {
            totalScore += 3
        } else if (x === y) {
            totalScore += 1
        }
    })

    return totalScore;

}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool) {
        return "Yes"
    } else {
        return "No"
    }
}

function boolToWord(bool) {
    return bool ? "Yes" : "No"
}

