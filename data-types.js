//string
let a = "";
let b = "";
let c = ``;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//Numbers
let d = 123;
let e = 1.23;
let f = 1e23;
let g = NaN; // NaN --> not a number
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//Null
let h = null;
console.log(typeof h);

//array
//single dimensional
let arr = [];
let myInfo = ["Shreejana", "bhaktapur", 9834355666, 984728899];
console.log(myInfo[0]);
console.log(myInfo[1]);
console.log(myInfo[2]);
console.log(myInfo[3]);

//multi dimensional
let multiArr = [];
let myInfo1 = ["Shreejana", "bhaktapur", [9847264791, 984362582]];
console.log(myInfo1[0]);
console.log(myInfo1[1]);
console.log(myInfo1[2][0]);
console.log(myInfo1[2][1]);

let productInfo = [
  "apple iphone 12",
  "apple",
     "oliz store",
     1200000,
   10,
     5,
];

//object

//mixed
let allProducts = [
  {
    name: "apple iphone 12",
    brand: "apple",
    store: "oliz store",
    price: 1200000,
    discount: 10,
    stock: 5,
  },
  {
    name: " samsung m10",
    brand: "samsung",
    store: "oliz store",
    price: 15000,
    discount: 15,
    stock: 15,
  },
];

console.log(allProducts[0].name);
console.log(allProducts[0]["brand"]);




//function -->consider as datatype
const getName = function(){}
const getUserName = () => {}



//set  --> subset of obj data
let arrData = []


//symbol ==> used to generatet unique key
let obj = {
  key:"value",
  key:"new value"
}



//date--> obj datatype


//objdata and json
//json universal datatype
let objData = JSON.stringify