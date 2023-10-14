// function addNumber(x, y, z) {
//     return x + y + z;
// }


// let numbers = [1, 2, 3]
// console.log(addNumber(...numbers));
// // console.log(addNumber(numbers[0], numbers[1], numbers[2]));


function addNumber(x, y, z) {
    return x + y + z;
    // console.log(x, y, z);
    // console.log(`${x} ,${y},${z}`);
}
let numbers1 = [1, 2, 3]
// console.log(addNumber(...numbers));
// let numbers1 = [5, ...numbers, 6]
// console.log(numbers1)


let numbers2 = [4, 5, 6]

// let numbers = numbers1.concat(numbers2);
let numbers = [...numbers1, ...numbers2];

console.log(numbers);
