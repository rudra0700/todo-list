const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  document.getElementById("add-btn").addEventListener("click", createTask);
};

const createTask = () => {
  if (inputBox.value.trim() === "") {
    alert("you have to write something");
  } else {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.innerText = inputBox.value;
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData()
};

const deleteTask = () => {
  listContainer.addEventListener(
    "click",
    (event) => {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
      } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
      }
    },
    false
  );
};

const saveData = () =>{
  localStorage.setItem("data", listContainer.innerHTML)
}

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data")
}
showData()
deleteTask();
addTask();
