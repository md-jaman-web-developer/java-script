for(i=0; i<3;  i++) {

document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
  var text = this.innerHTML;
  console.log(text);
audioplay(text);
animationplay(text);
   
   
});
}

document.addEventListener("keypress",function(evet){
  var text= evet.key;
  audioplay(text);
  animationplay(text);
});


function audioplay(md){
  switch(md){
      case"a":
      new Audio("1.mp3").play();
      break;
      case"b":
      new Audio("2.mp3").play();
      break;
      case"c":
      new Audio("3.mp3").play();
      break;
}
}


function animationplay(text){
      document.querySelector("."+text).classList.add("anim");
      


      setTimeout(function(){
        document.querySelector("."+text).classList.remove("anim");
      },5000000);
    }


