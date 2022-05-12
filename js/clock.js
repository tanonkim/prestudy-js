const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = new Date().toLocaleTimeString();
  //clock.innerText = `${date.getHours().padStart(2,"0")}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 이게 없으면 바로 시작 안하고 딜레이
setInterval(getClock, 1000);
