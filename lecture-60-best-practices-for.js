// Variable declaration
let firstName, lastName, UserInfo, UserEmail;

firstName = "md jaman";
lastName = "ms farzana";

// Avoid unnecessary variables
console.log(firstName + lastName);

// Switch statement example
const key = 'value'; // Define key
switch (key) {
    case 'value':
        console.log('Value is found');
        break;
    default:
        console.log('Default case');
}

// Object and array with const
const names = ["md jaman", "ms farzana"];

// Pushing a string into the array
names.push("salma");
console.log(typeof names);

// Access DOM element
const ol = document.querySelector(".student-list");
if (ol) {
    const firstol = ol.children[0];
    console.log(firstol);
} else {
    console.log("No element with class 'student-list' found in the DOM.");
}

// Event listener for the submit button
const submitButton = document.querySelector("button");
if (submitButton) {
    submitButton.addEventListener("click", () => {
        console.log("Button clicked");
    });
} else {
    console.log("No button found in the DOM.");
}
