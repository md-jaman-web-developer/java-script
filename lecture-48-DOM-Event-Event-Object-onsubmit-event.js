document.querySelector("form").addEventListener("submit",jaman);

function jaman(md){
    md.preventDefault();
    console.log("submit");
    console.log("submit");
    console.log("submit");
    // Access form elements by name attribute
    console.log(md.target.email.value);
    console.log(md.target.password.value);
    console.log(md.target.name.value);
}