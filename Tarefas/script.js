let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function render(){
    listElement.innerHTML = "";

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Exlcuir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

    })

}

render();

function adicionar(){
     if(inputElement === ""){
        alert('Registre alguma tarefa'); 
        return false;
     }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = "";
    }

    render();
    salvar();
}

buttonElement.onclick = adicionar;

function deletarTarefas(posicao){
    tarefas.splice(posicao, 1);

    render();
    salvar();
};

function salvar(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
