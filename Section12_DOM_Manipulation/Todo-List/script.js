var addButton = document.getElementById("enter");
var input = document.getElementById("user-input");
var h2 = document.querySelector("h2");
var ul = document.querySelector("ul");

function listLength() {
    return ul.childElementCount;
}

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.classList.add("list-item");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", toggleDone);
    ul.appendChild(li);
    input.value = "";

    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-times");
    deleteButton.classList.add("cus-btn");
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", deleteItem);
    li.appendChild(deleteButton);

    if (listLength() > 0) {
        h2.style.display = "none";
    }

    function toggleDone() {
        li.classList.toggle("done");
    }

    function deleteItem() {
        li.remove();
        if (listLength() === 0) {
            h2.style.display = "block";
        }
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);