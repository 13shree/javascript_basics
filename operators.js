// //arthimetic or mathematical operators
// /**
//  * +,-,/,*,%
//  * increment or decrement
//  * ++, --
//  */
// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// a = a + 1; //12
// a++; //13
// ++a;
// console.log(a++); //console.log(a) a=a+1   13 print garxa then incrment 14
// console.log(++a); //increment garxa 14 lai so 15 then print

// /**
//  * assignment
//  * =, +=, -=, *= ,/=, %=
//  */

// /**
//  * string/concatenation
//  *  +
//  */
// let x = 10;
// let y = "10";

// let z = x + y;
// console.log(z); //1010

// /**
//  * comparision --return boolean value
//  *  <, >, <=, >=, == ,===, !=, !==
//  */
// //compare value only
// console.log(x < y);
// console.log(x > y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x == y);
// console.log(x != y);

// //compare value and datatype
// console.log(x === y);
// console.log(x !== y);

// /**
//  * logical operator
//  */
// console.log(true && true && true); //true
// console.log(true || false || false); //true
// console.log(!true);
// console.log(!false);

/**
 * conditional /ternary  --> single line if else stmt
 * (expression) ? code : codeblock
 *
 * Nullish colleaching
 * Templete literals
 * array/object destructure
 * Spread and rest
 */

// let user = {
//   age: 16,
// };
// let result =
//   user.age >= 18 ? "Age is greater than 18" : "Age is lesser than 18";
// console.log(result);

// //nullish
// let age = user.age ?? null; // pf valuse assign then assign value if value isnot assigned then assign null

//template literals
//string var banaunu paryo ra mutiline lekkhnu xa vane
// let name = "Shreejana";
// let email = "abc@gmail.com";

// let template = `
// Dear ${name},
// Your email ${email} has been sucessfully registered.

// Best regards
// xyz
// `;

// console.log(template);

//array bata var ma convert garne

//arr destructor
let [firstName, lastName] = ["shreejana", "sainju"];

//obj destructor
// let userInfo = {
//   name: "Shreejana",
//   email: "dadv@gmail.com",
//   address: "bkt",
//   phone: 4725299,
// };
// let { name, phone, email: emailAddress } = userInfo;

//spread and rest --> comes with destructor, deep copy garxa -->

//deep and shallow copy

let userInfo = {
  name: "Shreejana",
  email: "dadv@gmail.com",
  address: "bkt",
  phone: {
    mobile: 625919,
    landline: 982526,
  },
};

//let { name, phone, email: emailAddress, ...remaining } = userInfo;

//let userObj = userInfo;

// let userObj = {
//   ...userInfo,
//   phone: {
//     ...userInfo.phone,
//   },
// };

// console.log(userInfo);

// userObj.name = "updated name";

// console.log(userInfo);

// let obj = JSON.parse(JSON.stringify(userInfo))

/**
 * bitwise --> both T then T
 * & |
 */
// console.log(4 & 5)
// console.log(4 | 5)

let today = new Date();

//let newDate = today;
let newDate = new Date(today);

console.log(newDate);
