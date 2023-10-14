var input = document.querySelector("input");
// input.addEventListener("blur", function () {
//     console.log("blur is occured");
// });
input.addEventListener("focus", function (e) {
    // console.log("focus is occured");
    // input.style.backgroundColor = "green";
    // input.style.padding = "2rem";
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});
// input.addEventListener("focusin", function () {
//     console.log("focusin is occured");
// });
// input.addEventListener("blur", function () {
//     console.log("blur is occured");
// });
// input.addEventListener("blur", function () {
//     console.log("blur is occured");
// });