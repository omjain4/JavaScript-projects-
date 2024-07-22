const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

document.addEventListener("DOMContentLoaded", function() {
    const savedItems = JSON.parse(localStorage.getItem("toDoList"));
    if (savedItems) {
        savedItems.forEach(item => addToDo(item.text, item.done));
    }
});

// Save the to-do list to local storage
const saveToDoList = () => {
    const items = [];
    document.querySelectorAll("#to-do-box li").forEach(li => {
        items.push({
            text: li.querySelector("span").innerText,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("toDoList", JSON.stringify(items));
};

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addToDo(this.value, false);
        this.value = "";
    }
});

const addToDo = (itemText, isDone) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${itemText}</span>
        <i class="fas fa-times"></i>
    `;

    if (isDone) {
        listItem.classList.add("done");
    }

    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
        saveToDoList();
    });

    listItem.querySelector("i").addEventListener("click", function(event) {
        event.stopPropagation();
        listItem.remove();
        saveToDoList();
    });

    toDoBox.appendChild(listItem);
    saveToDoList();
};
