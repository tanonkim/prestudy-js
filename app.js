console.log(2 + 2);
const a = 1;
const b = 2;
let name = "david";

console.log(a + b);
console.log("hello " + name);

// let   : 변하는 값
// const : constant상수 : 변할 수 없음

name = "DDDavid";
console.log("Changed name " + name);
// let으로 선언했기 때문에 변화가 생긴다.
// 변수를 업데이트해야 하는 경우는 잘 없을 것
// => 대부분은 const로 작성, 필요할 때만 let을 사용

//var : 원한다면 어디서든 업데이트가 가능함 but 언어를 통해 보호를 받지 못함 // 사용 NO

//------------------------------------------------------------------------------------
//Booleans

const amIFat = true;
console.log(amIFat);

const areYouFat = null;
//변수안에 (값이) 아무것도 없다는 의미(아무것도 채워지지 않음) <==> true, false와는 달리
let something;

console.log(amIFat, areYouFat, something);
//true, null, undefined
//------------------------------------------------------------------------------------
//Arrays
const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeeks[5]);

daysOfWeeks.push("Love");
console.log(daysOfWeeks);

//------------------------------------------------------------------------------------
//Objects

// const playerName = "david";
// const playerPoints = 12;
// const playerHandsome = true;
// const playerFat = "little bit";

const player = {
  name: "david",
  points: "12",
  handsome: true,
  fat: "little bit",
};

// object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.

console.log(player.points);
console.log(player["fat"]);

// 다음과 같이 불러올 수 있다.

player.color = "black";
player.lastName = "Kim";
console.log(player);

// const는 객체이기 때문에, constant 안의 무언가를 수정할 때는 수정이 된다.

//------------------------------------------------------------------------------------
//Funcions part One

function sayHello(nameOfPerson, age) {
  console.log("This is " + nameOfPerson + " I am " + age + " age");
}

sayHello();
// 함수 실행은 다음과 같이 한다.
sayHello("david", 20);
sayHello("kim", 10);
// 변수는 다음과 같이 넣는다.

//------------------------------------------------------------------------------------
//Funcions part Two
function calculatorPlus(a, b) {
  console.log(a + b);
}
calculatorPlus(2, 4);

function calculatorDivide(a, b) {
  console.log(a / b);
}
calculatorDivide(2, 4);

//####################################
const player2 = {
  name: "DDavid",
  sayHello: function (otherPersonsName) {
    console.log("hello this is something weird " + otherPersonsName);
  },
};

console.log(player2.name);
player2.sayHello();
player2.sayHello("Kane");
// otherPersonsName == "Kane"

//------------------------------------------------------------------------------------
// returns 이 형태는 꼭 기억하자! 2.11, 12
const age = 99;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
// calculateKrAge(age)에 대한 값이 krAge에 저장되어있고, 그리고 그 값을 console에 찍어서 사용함
//그리고 return까지만 작업이 수행됨/ 함수가 끝남

//------------------------------------------------------------------------------------
// conditionals

const old = parseInt(prompt("How old?"));
console.log(isNaN(old));
//true => string false => number

if (isNaN(old)) {
  alert("please wirte a number");
} else {
  alert("Thank you for writing your age");
}
//if (isNaN(old) === true)는 if (isNaN(old))와 완전히 똑같다!
//AND = &&
//OR = ||

true || true === true;
true || false === false;
false || true === false;
false || false === false;
// ===를 사용하면 유형도 비교할 수 있다.
