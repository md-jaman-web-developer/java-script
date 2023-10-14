function square(x) {
    console.log(`square of ${x}: ${x * x}`);
}

// square(5);


// const y = square;
// y(5);



function higherOrderFunction(num, callback) {
    callback(num);
}
higherOrderFunction(6, square);




// // synchronous programming
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// console.log("Task5");



// synchronous programming
const task1 = (callback) => {
    console.log("Task1");
    callback();
}

const dataloading = () => {
    console.log("Task2,data loading");

}

const task2 = (callback) => {

    setTimeout(dataloading, 2000);
    callback();
}




const task3 = () => {
    console.log("Task3");
}
const task4 = () => {
    console.log("Task4");
}
const task5 = () => {
    console.log("Task5");
}


task1(function f1() {
    task2(function f2() {
        task3();
    });

});

task4();
task5();

