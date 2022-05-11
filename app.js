// 3.2
// const title = document.getElementById("title");

// console.dir(title);
// title.innerText = "This is InnerText";
// console.log(title.id, title.className);
// //html(document)에서 항목들을 가져와서 JS를 통해 항목들을 변경
const hellos = document.getElementsByClassName("hello");
const title = document.getElementById("title");
// console.log(hellos);

//getElementsByClassName, getElementById

//querySelector은 element를 CSS 방식으로 검색할 수 있음
const title1 = document.querySelector(".hello h1");
console.log(title1);

//querySelector => 여러개의 h1이 있어도 맨 처음의 h1(array)만 가져옴
//querySelectorAll => 여러개의 h1가 있어도 모두 가져옴

//3.3 Event들은 on~이 붙어있다.

function handleTitleClick() {
  currentColor = title1.style.color;
  let newColor;
  newColor = title1.style.color;
  if (currentColor === "red") {
    newColor = "blue";
  } else {
    newColor === "red";
  }
}

// function handleMouseEnter() {
//   title.innerText = "Mouse is Here";
// }

// function handleMouseLeave() {
//   title.innerText = "Mouse Gone";
// }

function handleWindowResize() {
  document.body.style.backgroundColor = "red";
}

title1.addEventListener("click", handleTitleClick);
//title.onclick = handleTitleClick
// // title.addEventListener("mouseenter", handleMouseEnter);
// // //title.onmouseenter = handleMouseEnter
// // title.addEventListener("mouseleave", handleMouseLeave);
// // //title.onmouseleave = handleMouseLeave
console.dir(title);
//3.4 h1 html element mdn

window.addEventListener("resize", handleWindowResize);
//document의 body, title, header은 중요한 것이기 때문에
//document.body.style의 명령은 허용됨
//div같은 것들은 호출이 안되서 queryselector이나 getElementByID
//같은 걸로 불러와야 해
