// function named calculateDifference

function calculateDifference(a, b){
    return a - b
}
let result = calculateDifference(10, 5);
console.log(result);



// function named isOdd

function isOdd(number){
    return number % 2 !== 0;
}
console.log(isOdd(3));
console.log(isOdd(10));  



// function named findMin

function findMin(numbers){
    let min = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i]
        }
    }
    return min;
    
}
const numbers = [3, 4, 9, 1, 5];
console.log(findMin(numbers));



// function named filterEvenNumbers

function filterEvenNumbers(allNumbers){
    return allNumbers.filter(number => number % 2 === 0)
}

const allNumbers = [1, 6, 3, 13, 5, 22, 7, 88, 67, 1024];
const evenNumbers = filterEvenNumbers(allNumbers);
console.log(evenNumbers);



// function named sortArrayDescending


function sortArrayDescending(number){
    let sortedNumber = number.slice();
    sortedNumber.sort(function(a, b){
        return b - a;
    });
    return sortedNumber;
}

let number = [5, 3, 8, 1, 2];
let sortedNumber = sortArrayDescending(number);
console.log(sortedNumber);




// function named lowercaseFirstLetter


function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("ASSIGNMENT"));



// function named countVowels 

function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str){
        if(vowels.includes(char))
            count++
    };
    return count;

}

console.log(countVowels("Assignment"))




// function named findAverage 



function findAverage(digits){
    let sum = digits.reduce((acc, curr) => acc + curr, 0);

    return sum / digits.length;
}
const digits = [4, 6, 2, 9, 10, 3];
console.log(findAverage(digits));