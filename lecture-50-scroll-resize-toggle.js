window.addEventListener("load",function(){
    console.log("load");
});
window.addEventListener("unload",function(){
    console.log("unload");
});
window.addEventListener("scroll",function(){
    console.log("scroll");
});
window.addEventListener("resize",function(){
    console.log("resize");
});

window.addEventListener("resize",function(){
    var width= this.window.outerWidth;
    var height= this.window.outerHeight;
    console.log(`height: ${height},width:${width}`);
});
document.querySelector("details").addEventListener("toggle",function(){
    console.log("toogle");
});