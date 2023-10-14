// array destructure


let array = [10, 20, 30, 40, 50, 60]

let [num1, num2, num3, num4, num5, num6] = number





// // swap variables

let a = 10, b = 20;


[a, b] = [b, a]

console.log(a)
console.log(b)

// object destructure

const studentInfo = {
    id: 101,
    fullName: 'md',
    gpa: 3.92,
    languages: {
        native: 'bangla',
        beginner: 'english'
    }
}
const { languages, fullName } = studentInfo
console.log(languages);
console.log(fullName);
console.log(gpa);


// destructuring function parameters
const studentInfo2 = (id, fullName) => {
    console.log(`${id}, ${fullName}`)
}
const student = {
    id: 101,
    fullName: "Anisul Islam"
}
studentInfo2(student)
// nested object destructure
//-destructuring function parameters