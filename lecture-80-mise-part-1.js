// how to create a promise- pending, resolve,reject

const promise1 = new Promise((resolve, reject) => {

    let completedPromise = false;
    if (completedPromise) {
        resolve("cpompleleted massage promise")
    } else {
        reject("not completed promise")
    }

})


// console.log(promise1);
promise1.then((s) => {
    console.log(s);
})

    .catch(error => {
        console.log(error);
    })
console.log("end");