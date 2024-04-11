// Add an element at the end of the array

let numbers = [1, 2, 3, 4, 5];
let pushNumber = numbers.push(6);
console.log(numbers);

// Loop on all array elements
numbers.forEach(function(element) {
    console.log(element);
});

// Access to the array element with its index
let index=2;
let element=numbers[index];
console.log(element);
// Remove an array element with its index
let indexRemove = 2;
let removeNumber = numbers.splice(indexRemove, 1);
console.log(numbers);
// Filter array elements
console.log(numbers.filter(number => number > 3));

// Transform each array element by applying a function on them
console.log(numbers.map(plusNumber));
function plusNumber(number){
    return number*2;
}