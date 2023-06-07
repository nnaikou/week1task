import "./styles.css";

const buttonPrint = document.getElementById("my-button");
buttonPrint.addEventListener("click", function () {
    const text = document.getElementById("h1-text");
    text.innerText = "My notebook"
    console.log("Hello world");
});

const buttonAdd = document.getElementById("add-data");
buttonAdd.addEventListener("click", function() {
    const list = document.getElementById("my-list");

    let inputText = document.getElementById("area").value
    let newItem = document.createElement("li");
    newItem.innerText = inputText    
    list.appendChild(newItem);
    
    
});
