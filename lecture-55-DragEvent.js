document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    var div = document.querySelector("div");
    var pad = document.querySelector("#drag1");

    pad.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("Text", e.target.id);
    });

    div.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    div.addEventListener("drop", function (e) {
        const id = e.dataTransfer.getData("Text");
        console.log(id);
        div.appendChild(document.getElementById(id)); // Uncomment this line to move the element
        e.preventDefault();
    });
});
