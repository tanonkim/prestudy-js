const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // li.id와 다른 id를 남겨두고 싶다
  saveToDos(); // 이를 한번 더 불러야 함!
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // innerText 생성
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // li 안에 span 넣기
  li.appendChild(button);
  toDoList.appendChild(li); // 마무리로 Html 태그에 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //맨 처음 값 이후에 value를 복사
  toDoInput.value = ""; //맨 처음 값
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 배열에서 저장 후 localstorage에 저장하기 위함
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos?.forEach(paintToDo); // 로컬 저장소에 있는 항목들을 끌고 옴 7.5
}
