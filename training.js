// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// let login = false;
// let userone="tamizh"
// let usertwo="raghul"

// let open = login ? `welcome,${userone}!` : "Incorrect";
// console.log(open)

// let isLoggedIn = true;
// let userName = "John";

// let message = ! isLoggedIn ? `Welcome, ${userName}!` : "Login";
// console.log(message);

// let isDarkMode = false;

// let theme =isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled";
// console.log(theme);

// let stock = 0

// let stockStatus = stock > 0 ? "In Stock" : "Out of Stock";
// console.log(stockStatus);

// let vote=17

// let checkvote= vote>=18 ? "eligible" : "not eligible";

// console.log(checkvote)

// let age = 19

// if (age >= 18) {
//     console.log("You are an adult.");
// }


// let stocks= 10;
// while (stocks> 0) {
//     console.log(`Processing order... Remaining stock: ${stocks}`);
//     stocks--;
// }



// let dice;
// console.log(dice)
// do {
//     dice = Math.floor(Math.random() * 6) + 1;
 
//     console.log(`Rolled: ${dice}`);
// } while (dice !== 6);
// console.log("You got a 6!");


// for(i=0;i<=20;i++){
//     console.log(Math.floor(Math.random()*6))
// }


// let word=["tsmixh","rock","sar"]

// for(let x of word){
//     console.log(x)
// }

// let tak="bare";
// let anss=tak.at(-2);
// let anws=tak.charAt(2);
// let ran=tak.charCodeAt(1)
// console.log(ran);
// console.log(anss);
// console.log(anws);


// let htp="tamizhanban"
// let pan=htp.substring(-5,-2)
// console.log(pan);

// let tam="TAMIZH"
// let rock=tam.toLowerCase()
// console.log(rock);

// let tam="tamizh is"
// let ran= tam.concat(" node js developer")
// let yen=`${tam} node js developer `

// console.log(ran)
// console.log(yen)

// let tam="  tamizhanban  "
// console.log(tam);
// //let tan=tam.length
// let tan=tam.trimEnd().length
// console.log(tan);

// let tam="tam"
// let tan=tam.padEnd(8,"*")
// console.log(tan);


// let str = "Ha";
// let tan=str.repeat(3)
// console.log(tan);

// let tam=" tam is nodejs developer and also he knows both nodejs and nextjs"
// let rock=tam.replace("node","react")
// console.log(rock)


// let tam=" tam is nodejs developer and also he knows both nodejs and nextjs"
// let rock=tam.replaceAll("node","react")
// console.log(rock)


// let tam="rock,tani,yul"
// let con=tam.split(",")
// console.log(con)

// let tam=["tam","rock","tan"]
// let rock=tam.push("pan")
// rock=tam
// rock.push("sin")
// console.log(rock,tam);



// let fruits = ["Apple", "Banana", "Mango"];
// let lastFruit = fruits.pop();
// console.log(fruits);  // ["Apple", "Banana"]
// console.log(lastFruit);  // "Mango"



// let fruits = ["Apple", "Banana", "Mango"];
// let lastFruit = fruits.unshift("cherry");
// console.log(fruits); 
// console.log(lastFruit);  

// let fruits = ["Apple", "Banana", "Mango"];
// let firstFruit = fruits.shift();
// console.log(fruits);  // ["Banana", "Mango"]
// console.log(firstFruit);  // "Apple"

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Banana"));  
// console.log(fruits.indexOf("Grapes"));  

// let fruits = ["Apple", "Banana", "Mango", "Grapes"];
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits);  



//removing one element from an Array

// let colors = [1,2,3,4,5];
// let removed = colors.splice(1, 1);  
// console.log(colors); 
// console.log(removed);  

// let colors = [1,2,3,4,5];
// let removed = colors.splice(1, 2);  
// console.log(colors); 
// console.log(removed);  

// let numbers = [10, 20, 30, 40, 50];
// let removedNumbers = numbers.splice(1, 3);  // Removes 20, 30, 40
// console.log(numbers);  // [10, 50]
// console.log(removedNumbers);  // [20, 30, 40]


// let fruits = ["Apple", "Mango"];
// fruits.splice(1, 0, "Banana", "Orange");  
// console.log(fruits);  // ["Apple", "Banana", "Orange", "Mango"]

// let num=[1,2,3,4,5]
// let newnum=num.splice(1,0,1.5)
// console.log(newnum,num);

// let cities = ["New York", "London", "Paris", "Tokyo"];
// cities.splice(2, 2, "Berlin");  
// console.log(cities);  // ["New York", "London", "Berlin", "Tokyo"]

// let city=["ny","uk","ind","jap"]
// let newcit=city.splice(1,1,"us")
// console.log(city,newcit)

// let items = ["A", "B", "C", "D", "E"];
// items.splice(2);  // Removes all from index 2
// console.log(items);  // ["A", "B"]


// let tam=[1,2,3,4,5]
// let ran=tam.splice(2)

// console.log(tam,ran)

// let arr = [1,2,3,4];
// [arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr); 


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr);  // [1, 2, 3, 4, 5, 6]


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let merge=[...arr1, ...arr2]
// console.log(merge)


// let names = ["john", "mike", "sara"];
// let tan=names[0].charAt(0).toUpperCase() + names[0].slice(1)
// console.log(tan)

// let formattedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// //console.log(formattedNames);  // ["John", "Mike", "Sara"]

// let names = ["john", "mike", "sara"];

// let formattedNames = names.map(x => x.charAt(0).toUpperCase() + x.slice(1));
// console.log(formattedNames);  // ["John", "Mike", "Sara"]


// let tam = "tam is nodejs developer";
// let capitalized = tam.split(" ") // Split the string into words
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
//     .join(" "); // Join words back into a string

// console.log(capitalized); // Output: "Tam Is Nodejs Developer"


// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4] (Original array remains unchanged)

//forEach with Arrow function

// let numbers = [1, 2, 3, 4];
// numbers.forEach(
//     (num, index, arr) => {
//         arr[index] = num * 2;
//         console.log(num,index);
        
//      });
// console.log(numbers); // [2, 4, 6, 8] (Original array is modified)

// let numbers = [2, 4, 6, 8];
// numbers.forEach((num, index, arr) => arr[index] = num * 2);
// console.log(numbers); // [4, 8, 12, 16]


// let emails = ["john@gmail.com", "alice@yahoo.com", "mike@gmail.com"];
// let gmailUsers = emails.filter(email => email.includes("@gmail.com"));
// console.log(gmailUsers); // ["john@gmail.com", "mike@gmail.com"]


// let nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


// let tam=[1,2,3,4,5,6]
// let ban=tam.reduce((acc,val)=>{
//     return
//     acc+val
//     console.log(acc,val)
    
   
// },[])
// console.log(ban)

// let tam = [1, 2, 3, 4, 5, 6];

// let ban = tam.reduce((acc, val) => {
//     console.log(acc); 
//     return acc + val; 
// }, 0); 

// console.log("Final Sum:", ban);






// To achieve your goal of making modifications to person without affecting person1, you need to create a deep copy of the object rather than just assigning it as a reference.

// In your current code:


// let person1 = { person };
// This doesn't actually create a separate copy of the object; instead, it stores a reference to the same object. Therefore, changes to person will reflect in person1.

// ✅ Solution: Creating a Deep Copy
// You can use Object.assign(), the spread operator (...), or JSON.parse(JSON.stringify()) to create a deep copy.

// 🔹 Using Spread Operator:

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     gender: "male"
// };

// // Deep Copy
// let person1 = { ...person };

// person.country = "USA";
// person.phone = 9080;

// console.log("Person:", person);   // Modified object
// console.log("Person1:", person1); // Unmodified copy

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     gender:"male"
// };

// let person1={...person};



// // console.log(person); 
// // console.log(person.age);
// // console.log(person["gender"])

// person.country = "USA";
// person.phone=9080
// delete person.age;
// console.log(person);


// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     start: function() {
//        console.log(`car brand is ${"brand"} and model is ${"model"}`);
//     }
// };
// // for(let x in objects){
    
// // }
// //calling the function outside the parameter
// car.start(); 



// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     gender:"male"
// };

// console.log(Object.entries(person))

// // for (let x in person){
// //     console.log(x)
// //     console.log(person[x])
// // }

// let person = {
//     name: "John",
//     age: 30,
// };

// let additionalInfo = {
//     city: "New York",
//     gender: "male"
// };

// let completePerson = {...person,...additionalInfo}
// // let completePerson = Object.assign({}, person, additionalInfo);
// console.log(completePerson); 


// const book = {
//     getTitle: function() {
//         return this.title;
//     }
// };

// const myBook = Object.create(book, {
//     title: {
//         value: "JavaScript Guide",
//         writable: false,
//         enumerable: true,
//         configurable: false
//     },
//     author: {
//         value: "John Doe",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// console.log(myBook.getTitle());  
// console.log(myBook.author);      
// myBook.author = "Jane Doe";
// console.log(myBook.author);     

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let entries = Object.entries(person);
// console.log(entries);

// let entries = [
//     ["name", "John"],
//     ["age", 30],
//     ["city", "New York"]
// ];

// let person = Object.fromEntries(entries);
// console.log(person);

// Object.keys

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let result = Object.values(person);
// console.log(result);

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.introduce = function() {
//         return `Hi, I am ${this.name} from ${this.city}.`;
//     };
// }

// const person1 = new Person("John", 30, "New York");
// const person2 = new Person("Alice", 25, "Los Angeles");

// console.log(person1.introduce(),(person2.introduce())); 



// 1. Adding or Changing an Object Property - Object.defineProperty()

// The Object.defineProperty() method is used to define or modify a property on an object. It allows us to add properties with more control over their behavior (like making them read-only).

// Syntax:



// Object.defineProperty(object, property, descriptor);

// object: The object on which to define the property.
// property: The name of the property.
// descriptor: An object that defines the property’s configuration.


// let person = {};

// Object.defineProperty(person, "name", {
//     value: "John",
//     writable: false, // Cannot be changed(false)  // changes occurs(true)
//     enumerable: true, // Can be listed in loops
//     configurable: true // Can be deleted or reconfigured
// });

// console.log(person.name); // Output: John

// // Trying to change the name (fails silently in strict mode)
// person.name = "Mike";
// console.log(person.name); // Output: John

// 🛠️ 2. Adding or Changing Multiple Properties - Object.defineProperties()


// The Object.defineProperties() method allows you to define or modify multiple properties at once.

// Syntax:

// Object.defineProperties(object, descriptors);


// descriptors: An object containing multiple property definitions.


// let car = {};

// Object.defineProperties(car, {
//     brand: {
//         value: "Toyota",
//         writable: true,
//         enumerable: true
        
//     },
//     model: {
//         value: "Camry",
//         writable: false,
//         enumerable: true
//     },
//     year: {
//         value: 2022,
//         writable: true,
//         enumerable: true
//     }
// });

// console.log(car); // Output: { brand: 'Toyota', model: 'Camry', year: 2022 }
// car.brand = "Hyundai";
// console.log(car.brand); 
// console.log(car); 
// car.model = "Accord"; // Cannot change as writable is false
// console.log(car.model); // Output: Camry
// let sym=Symbol('+')
// console.log(typeof(sym))
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "EN",
//     [sym]:sym
    
//   }
// //   console.log(person)
// console.log(Object.getOwnPropertySymbols(person));


// let book = {
//     title: "JavaScript Guide"
// };

// Object.defineProperty(book, "author", {
//     value: "John Doe",
//     writable: true,
//     enumerable: false
// });

// let descriptor = Object.getOwnPropertyDescriptor(book, "author");
// console.log(descriptor);
// Output: { value: 'John Doe', writable: true, enumerable: false, configurable: false }

// const user = {
//     _age: 18,

//     get age() {
//         return this._age;
//     },

//     set age(value) {
//         if (value < 0) {
//             console.log("Age cannot be negative!");
//         } else {
//             this._age = value;
//         }
//     }
// };

// user.age = 25;
// console.log(user.age); // Output: 25

// user.age = -7; // Output: Age cannot be negative!
// console.log(user.age); // Output: 25












