// console.clear();

// const div = document.querySelector("div");
// console.log("div");

// div.addEventListener("click",function(e){
//      console.log(e.target);

//     // console.log("click");
// });
// // div.addEventListener("dblclick",function(){

// //     console.log("dblclick");
// // });
// // div.addEventListener("mousedown",function(){

// //     console.log("mousedown");
// // });
// // div.addEventListener("mouseup",function(){

// //     console.log("mouseup");
// // });
// // div.addEventListener("mouseenter",function(){

// //     console.log("mouseenter");
// // });
// // div.addEventListener("mouseleave",function(){

// //     console.log("mouseleave");
// // });
// // div.addEventListener("mouseover",function(){

// //     console.log("moseover");
// // });
// // div.addEventListener("mousemove", function(md) {
// //     console.log("clientX =" + md.clientX+"clineY="+md.clientY);
// // });

const button = document.querySelectorAll(".btn");
console.log(button);
Array.from(button).map((button) =>{
    button.addEventListener("click",function(e){
        console.log(e.target.innerText);
    })
}
)