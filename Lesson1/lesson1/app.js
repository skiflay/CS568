const funExp = require("./student")
const student = require("./student")
const helper = require('./helper');
const Student22 = require('./student')


//modify imported function
const std = student()
const copystd = {...std}
copystd.course = 'reactjs'
console.log(student())

const studentInfo = ()=> `my name is ${copystd.fname} ${copystd.lname} in ${copystd.dept} and taking ${copystd.course}`

console.log(funExp())
console.log(studentInfo())
console.log(helper())

 const student1 = new Student22('Bob');
// console.log(student1.sayHi());
// console.log(student1.sayYourAge());
// console.log(sayHi());
// console.log(minutesInHour);
