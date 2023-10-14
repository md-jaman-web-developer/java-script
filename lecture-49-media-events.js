document.querySelector("video").addEventListener("canplay",function(){
    console.log("canplay");
  });
  document.querySelector("video").addEventListener("play",function(){
    console.log("play");
  });
  document.querySelector("video").addEventListener("pause",function(){
    console.log("pause");
  });
  document.querySelector("video").addEventListener("playing",function(){
    console.log("playinhg");
  });
  document.querySelector("video").addEventListener("end",function(){
    console.log("thanks for waching");
  });
  document.querySelector("video").addEventListener("volumechange",function(){
    console.log("change");
  });