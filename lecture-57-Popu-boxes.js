// // alert("i");
// // function md() {
// //     let value = confirm("do you warness");

// //     if (value) {
// //         console.log("dleted");

// //     }
// //     else {
// //         console.log("not deleted");
// //     }
// // };
// // md();



// function welcome() {

//     var h1 = document.createElement("h1");
//     let text;


//     var name = prompt("enter your name");
//     if (name == null || name == "") {
//         text = 'no nane found'
//     }
//     else {
//         text = name;
//     }

//     var textvNode = document.createTextNode(text);
//     h1.appendChild(textvNode);
//     document.body.appendChild(h1);

// }


// welcome();

var h1 = document.createElement("h1");
let text;


let promp = prompt('enter your name ');

if (promp == null || promp == "") {
    text = "it not found"
}
else {
    text = promp;
}
var textnode = document.createTextNode(text);
h1.appendChild(textnode);

document.body.appendChild(h1);
