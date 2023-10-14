try {
    //code test
    alert("hi everyone");
    alert(x);
    alert("bye everyone");
} catch (err) {
    //handle error

    alert("inside catch block");
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}
finally {
    alert("bte evryones");
}