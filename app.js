    let addBtn =  document.getElementById("addBtn");
    let myInput = document.getElementById("myInput");
    let todos = document.getElementById("todos");

    addBtn.addEventListener("click", function(){
        let li = document.createElement("li");
        li.innerText = myInput.value;
        todos.appendChild(li);
        myInput.value = "";
        li.addEventListener("click",function(){
            li.style.textDecoration = "line-through";
    })
    li.addEventListener("dblclick",function(){
        todos.removeChild(li);
    })
});

