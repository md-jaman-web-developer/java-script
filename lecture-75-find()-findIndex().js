// find (callback, value) return the value of the first element that pass certain condition

let number = [5, 55, 14, 5, 78]
let firstEvenNumber = number.find(x => x % 2 === 0);
console.log(firstEvenNumber);


// find (callback, value) return the value of the first element that pass certain condition
let numbers = [5, 55, 14, 5, 78];
const evenNumber = (value, index, array) => {
    if (value % 2 === 0)
        return value;
}
let firstEvenNumber2 = numbers.find(evenNumber);
console.log(firstEvenNumber2)
// findIndex(callback, value) return the index of the first element that pass certain 
const students = [
    {
        id: 101,
        gpa: 2.5
    },
    {
        id: 102,
        gpa: 3.5
    },
    {
        id: 103,
        gpa: 4.5
    }
]
console.log(students.find(x => x.gpa > 2)) 