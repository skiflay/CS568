//1. Arrow Functions with {} 
const arrFun1 = (a)=>{
    return a;
}
// Arrow Functions without {} 
const arrFun2 = a=> a

console.log(arrFun1(5), arrFun2(5))

// 2. prove same arrow function are not equal
const a = x=> {
    console.log(this)
    return x
}

const b = x=> {
    console.log(this)
    return x
}

console.log(a(4), b(4))

//3. Create an object with a constructor using arrow  & regular function

function Person(fname, lname){
    this.fistname = fname;
    this.lastname = lname;
}
const p1 = new Person('simon', 'kiflay')
console.log(p1.fistname)

// arrow function 
/* Does not have its own bindings to this or super, and should not be used as methods.
- Does not have new.target keyword.
- Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Can not be used as constructors.
- Can not use yield, within its body.
*/

//Import and Export ==> check on lesson1 folder

// 7. create Person class

// Array methods map, find, findIndex, filter

const arr = [1,2,5,7,4,8]
const mapArr= arr.map(num=>num*2)
const filterArr = arr.filter(num=>num%2===0)
const findinx = arr.findIndex(num=> num>4)
const findNum = arr.find(num=> num>4)

console.log(mapArr)
console.log(filterArr)
console.log(findinx)
console.log(findNum)

/*Research
1. Read the lecture thoroughly. In your opinion, what are the 3 main points? Please share.
    => named and default export, arrow and regular function, and super key word in classes
2. What is the difference between an arrow function and regular function?
    => Thier main d/c is 'this' key word. In regular functions, the this keyword represents the object that
        called the function, however, in arrow function it's always represents the object that
        defined the arrow function
3. Do a research and list at least 3 pros and cons of arrow functions.
    => much shorter & clean
    => no need to bind 'this' keyword 
    => Since the 'this' keyword isnot bound to anything, it's not good to use it in Object methods
4. What is the difference between the spread operator and rest operator?
    => spread operator is used to  copy an array or clone an object
    => rest operator/destructuring   is used pulls out single element or single property to variables
*/
