// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n)
{
    if (n === 0)
    {
        console.log(`0`);
    }
    else if (n === 1)
    {
        console.log(`0 1`);
    }
    else
    {
        let fibString =`0 1`;
        let sum = 0;
        let first = 0;
        let second = 1;

        for (let i = 0; i <= n-2; i++)
        {
            sum = first + second;
            fibString += ` ` + sum;
            first = second;
            second = sum;
        }
        console.log(`fib of ${n} is: ` + fibString);
    }
}



// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray)
{
    for (let i = 0; i < numArray.length; i++)
    {
        for (let j = 0; j < numArray.length-1; j++)
        {
            let x = numArray[j];
            let y = numArray[j+1];

            if (x > y)
            {
                numArray[j] = y;
                numArray[j+1] = x;
            }
        }
    }
    return numArray;
}



// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr)
{
    let result = ``;
    for (let i = someStr.length; i >= 0; i--)
    {
        result += someStr.charAt(i);
    }
    return result;
}
reverseStr(`hello`); //return olleh



// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum)
{
    if (someNum === 1)
        return 1;
    return someNum * factorial(someNum - 1);
}
factorial(5); //returns 120



// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, offset, length)
{
    if (offset < 0 || length > someStr.length-1)
    {
        alert('length goes beyond string length');
    }

    let res = ``;
    for (let i = offset; i <= offset+length; i++)
    {
        res += someStr.charAt(i);
    }
    return res;
}



// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum)
{
    let numString = someNum.toString();
    let arr = ['0','2','4','6','8'];
    
    if (arr.includes(numString.charAt(numString.length-1)))
        return true;
    else
        return false;
}



// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr)
{
    let result = '';

    for (let i = someStr.length-1; i >= 0; i--)
    {
        result += someStr.charAt(i);
    }

    if (result === someStr)
        return true;
    else
        return false;
}



// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character)
{
    if (height % 2 === 0)
        alert('height must be an odd number');
    if (character.length > 1 || character. length < 0)
        alert('must be 1 character in length');
    else
    {
        if (shape === 'Square')
        {
            let charString = ``;
            for (let i = 0; i < height; i++)
            {
                for (let j = 0; j < height; j++)
                {
                    charString += character;
                }
                console.log(charString);
                charString = ``;
            }
        }
        else if (shape === 'Triangle')
        {
            let times = 1;
            let charString = ``;
            for (let i = 0; i < height; i++)
            {
                for (let j = 0; j < times; j++)
                {
                    charString += character;
                }
                console.log(charString);
                charString = ``;
                times++;
            }
        }
        else if (shape === 'Diamond')
        {
            let numChars = 1;
            let charString = ``;
            let mid = (height - 1) / 2;
            let min = mid;
            let max = mid;

            for (let rows = 0; rows < height; rows++)
            {
                for (let col = 0; col < height; col++)
                {
                    if (col >= min && col <= max)
                        charString += character;
                    else
                        charString += ' ';
                }
                console.log(charString);
                if (rows < mid) 
                {
                    min--;
                    max++;
                } 
                else 
                {
                    min++;
                    max--;
                }
                charString = ``;
            }
        }
    }
}



// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj)
{
    for (key in someObj)
    {
        console.log(key + ': ' + someObj[key]);
    }
}



// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr)
{
    console.log('Array length is: ' + someArr.length);
    delete someArr[2];
    console.log('Array length is now: ' + someArr.length);
}



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr)
{
    console.log('Array length is: ' + someArr.length);
    someArr.splice(2, 1);
    console.log('Array length is now: ' + someArr.length);
}



// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);

function Person(name, age)
{
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);



// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

function getPerson(name, age)
{
    return {name: name, age: age};
}