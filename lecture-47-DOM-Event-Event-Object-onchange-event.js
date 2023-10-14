// //  var input =document.querySelector("input[name=name]");
// //  console.log(input);

// //  input.addEventListener("change",changefuntion)

// //  function changefuntion(e){
// //     // console.log("change");
// //     // console.log(e.type);
// //     // console.log(e.target);
// //     // console.log(e.target.className);
// //     // console.log(e.target.id);
// //     // console.log(e.target.value);
   

// //  }
// var programs= document.querySelectorAll("input[name=program]");
// // console.log(programs);
// Array.from(programs).map((program) => {
//   program.addEventListener("change",programhand)
// })

// function programhand(md){
// if( md.target.checked){console.log("checked");}
// }
var department=document.querySelector("#department");
console.log(department);


department.addEventListener("change",handledepartment);

function handledepartment(md){
 console.log(md.target.value);
}