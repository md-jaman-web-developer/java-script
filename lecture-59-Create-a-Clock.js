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


saveButton.addEventListener("click", starClock);



function starClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secound = date.getSeconds();


    minutes = formaTime(minutes);
    secound = formaTime(secound);

    let time = hours + ":" + minutes + ":" + secound;

    masage.textContent = time;
    setInterval(starClock, 1000);
}

function formaTime(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}


