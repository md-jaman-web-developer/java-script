// "use strict"
// function message(text) {

//     console.log(`${text}`);
// }
// message("I love js es6");


// function message(text = "hello this is default paremeter") {

//     console.log(`${text}`);
// }
// message();

// message("I love js es6");
function sum(x, y, ...z) {
    console.log(`${x},${y}, ${z}`);
}

sum(10, 20, 30, 40, 50);



