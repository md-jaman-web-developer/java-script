// // synchronous programming
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// console.log("Task5");



// synchronous programming
const task1 = () => {
    console.log("Task1");
}

const dataloading = () => {
    console.log("Task2,data loading");

}

const task2 = () => {

    setTimeout(dataloading, 2000);
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


task1();
task2();
task3();
task4();
task5();