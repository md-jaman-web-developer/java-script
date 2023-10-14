document.querySelector("button").addEventListener("click", function () {
    // alert("hi");

    var good = document.querySelector("input").value;




    try {
        if (good < 5) {
            throw "input is too low"
        }
        else {
            throw "input is too high"
        }


    } catch (error) {


        console.log(error);
    }
})
