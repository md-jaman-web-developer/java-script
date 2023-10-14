// document.querySelector("textarea").addEventListener("keydown",function(){
//     console.log("keydown");
// });
// document.querySelector("textarea").addEventListener("keypress",function(){
//     console.log("keypress");
// });
// document.querySelector("textarea").addEventListener("keyup",function(e){
//     console.log(e.key);
// });
// document.querySelector("textarea").addEventListener("keyup",function(e){
//     console.log(e.code);
// });
// document.querySelector("textarea").addEventListener("keyup",function(e){
   
//    if(e.shiftKey){
//     console.log("shift"+e.key);
//    }
// });
document.querySelector("textarea").addEventListener("keypress",function(e){
   
    if(e.repeat){
     alert("do not repeat");
    }
 });