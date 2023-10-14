var student = [
    {
        id: 101,
        name: 'md jaman',
        gpa: 2.65
    },
    {
        id: 102,
        name: 'bijoy',
        gpa: 3.65
    },
    {
        id: 103,
        name: 'masa',
        gpa: 4.65
    }
]

// function studentNames() {
//     // Use filter to get students with GPA > 3
//     return student.filter(function (x) {
//         return x.gpa > 3;
//     }).map(function (y) {
//         return y.name;
//     })
// }




// const studentNames2 = () => {
//     return student.filter((x) => {
//         return x.gpa > 3;
//     }).map((y) => {
//         return y.name;
//     })
// }

const studentNames2 = () => student.filter((x) => x.gpa > 3).map((y) => y.name)

console.log(studentNames2());
