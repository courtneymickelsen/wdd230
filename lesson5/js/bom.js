const input = document.querySelector("#input");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

addButton.addEventListener('click', function(){
    let chapter = document.createElement('li');
    let deleteButton = document.createElement('button');
    chapter.textContent = `${input.textContent}`;
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', );
    list.appendChild(chapter);
});