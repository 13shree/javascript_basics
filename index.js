console.log("I an log");
console.info("I am info");
console.warn("I am warn");
console.error("I am error");
console.table("I am table");
console.group("I am group");
console.log("I am in gorup");
console.log("I am in group");
console.groupEnd();
console.timeStamp("start time");
console.timeStamp("end time");

console.log(fullName);
//console.log(emailAddress); //throw error
var fullName = "shreejana";
let emailAddress = "bfyg@gmail.com";

fullName = "update name";
console.log(fullName);

emailAddress = "update@gmail.com";
console.log(emailAddress);

//blocked scope
var a = 10;      //10 , mem-> 1234 ma basxa
console.log(a);  //op =>10
{
  var a = 20; //1234 ma 20 basxa
  console.log(a);   //op => 20
}
console.log(a);  //op => 10


let  b= 10;      //10 , mem-> 1234 ma basxa
console.log(a);  //op =>10
{
  let b = 20; //1234 ma 20 basxa
  console.log(a);   //op => 20
}
console.log(a); 



//constant --> value must be assigned
const PI = 3.14
//const PI =3.1455
console.log(PI)