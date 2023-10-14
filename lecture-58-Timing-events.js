// setTimeout(() => {
//     console.log("h1");
// }, 2000);

// setTimeout(display, 2000);

// function display() {
//     console.log("display function");
// // }

// const saveButton = document.querySelector('.save');
// const masage = document.querySelector(".massage");


// saveButton.addEventListener("click", saveUser);



// function saveUser() {
//     setTimeout(() => {
//         masage.textContent = "user registation sucessfully ";

//     }, 2000);
// }


const saveButton = document.querySelector('.save');
const masage = document.querySelector(".massage");


saveButton.addEventListener("click", saveUser);



function saveUser() {
    let count = 0;
    masage.textContent = count;
    setInterval(() => {
        count++;
        masage.textContent = count;
    }, 2000);
}


