//Execution context
var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();


let user={
    fullname:"Karan Chandra Kothari",
    address:{
        city:"East Delhi",
        State:"New Delhi",
    },
    mobileno:926793333,
    favcolor:["Red","Black","Orange"],
    demo:function(){
        return "demo function"
    }
}
// console.log(user.fullname,user.mobileno,user.favcolor[1], user.address.city,user.demo());

// console.log("My name is "+user.fullname+". My fav color is "+user.favcolor[0]);

// string literal
// console.log(`My name is ${user.fullname}. My fav color is ${user.favcolor[0]}`);

// Object methods

// Object.keys(variable name)

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// const car = { 
//     make: "BMW", 
//     model: "X5 M 
// };
//
// Object.freeze(car); //we cant add a new key and value pair and we cant change or update the existing value

// Object.seal(car) // we cant add a new key and value pair but we can change and update the existing value

// car.model="X5 M";
// car.color = "zblack"; 
// console.log(car);