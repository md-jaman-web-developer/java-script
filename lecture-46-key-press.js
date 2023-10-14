var count=0;


document.querySelector("textarea").addEventListener("keypress",function(evet){
    count++;
    var text = evet.key;
    document.querySelector("p").innerHTML="you press"+count;
});