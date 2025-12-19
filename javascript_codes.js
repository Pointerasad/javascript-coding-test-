1. Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.

function calculateSum(a,b){
    return a+b;
}

const num1=5;
const num2=5;
const result =calculateSum(num1,num2);
console.log("The sum is :",result);


2. Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.

function isEven(num){
    return num % 2==0;
}

const result = isEven(5);
console.log(result);


3. Write a function named findMax that takes an array of numbers and returns the largest number from the array.

function findMax(numbers){
   
    let max = numbers[0];

   for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;

}

const numArray = [3, 5, 7, 2, 8];
const maxNumber = findMax(numArray);
console.log(maxNumber);


4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0); 
}


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = filterOddNumbers(numArray);
console.log("Odd numbers:", oddNumbers); 


5. Write a function named countWords that takes a string and returns the number of words in the string.

const sentence = "Hello, how are you today?";

const words = sentence.split(" ");
count=0
for(let num of words){
   count ++;
}

console.log(count);



6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.

function removeDuplicates(arr){
   return arr.filter((k,v)=> arr.indexOf(k)===v)
}

const numbers = [1,2,3,4,5,5,6];

const uniqueNumbers =removeDuplicates(numbers);

console.log(uniqueNumbers);

