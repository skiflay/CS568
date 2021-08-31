const Person = require('./Person');
 
 const std1 = {
    fname: 'simon',
    lname: 'kiflay',
    dept: 'MSD'
}
function student(){
    return std1;
}

//  function funExp(){
//     return 'this is function expression'
// }

const arw = ()=>{
    console.log('this is Arrow function')
}


class Student extends Person{
    constructor(name){
        super(17);
        this.name = name;
    }
    sayHi() {
        return `Hi. I am ${this.name} and ${this.age} years old`
    }
    
}

module.exports = Student;
module.exports = arw;
module.exports = student;
//module.exports= funExp;
    
