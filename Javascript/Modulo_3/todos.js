var listElements = document.querySelector('#app ul');
var inputElements = document.querySelector('#app input');
var buttonElements = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_Todos')) || [];

function renderToDo() {
    listElements.innerHTML = '';
    for (todo of todos) {
        var li = document.createElement('li');

        var a = document.createElement('a');
        a.setAttribute('href', '#');
        var linkText = document.createTextNode('  Excluir');
        a.appendChild(linkText);

        var pos = todos.indexOf(todo);

        a.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        li.innerHTML = todo;
        li.appendChild(a);
        listElements.appendChild(li);
    }
}

renderToDo();

function adicionar() {

    var todoText = inputElements.value;
    todos.push(todoText);
    inputElements.value = '';
    renderToDo();
    saveToStorage();
}

buttonElements.onclick = adicionar;


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderToDo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_Todos', JSON.stringify(todos));
}