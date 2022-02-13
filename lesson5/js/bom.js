const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const list = document.querySelector(".list");

addButton.addEventListener('click', function() {
    let chapter = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    deleteButton.textContent = "❌";
    chapter.textContent = input.value;
    
    chapter.appendChild(deleteButton);
    list.appendChild(chapter);
    
    deleteButton.addEventListener('click', function(){
        list.removeChild(chapter);
    });
    
    input.focus();
    input.value = "";
});