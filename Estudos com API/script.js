/* FIND
let listagem = [5, 3, "jose", 2, "matheus"];

let busca = listagem.find((item)=>{
    if( item === "jose"){
        return console.log("Item encontrado");
    }
})

console.log(busca) ;
*/
//---------------------------------------------------------------------------------------------------
/* FILTER
let palavras = ["matheus", "ana", "jose", "sujeito programador"];
 
let resultado = palavras.filter((item)=>{
    return item.length >= 5;
})

console.log(resultado);
*/
//---------------------------------------------------------------------------------------------------
/* FUNÇÃO ANONIMA 
let subtrair = (valor1, valor2)=>{
    let total = valor1 - valor2;
    console.log(total);
}

subtrair(60, 30);
*/
//---------------------------------------------------------------------------------------------------
/* MAP 
let numeros = [1, 2, 3, 4];

numeros.map((item)=>{
    console.log(item);
})*/
//---------------------------------------------------------------------------------------------------
//inCludes, startWith, endWith
/*
let nome = ["matheus", "lucas", "jose"];

console.log(nome.includes("luc")); 

if(nome.includes("m atheus")){
    console.log("Esta na lista"); 
}else{
    console.log("Não esta na lista"); 
}

let nome = "Matheus";
console.log(nome.startsWith ("Mat"));

let nome = "Matheus";
console.log(nome.endWith ("eus"));
*/
//---------------------------------------------------------------------------------------------------
//  REQUISIÇÃO HTTP

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp(){
       
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
        posts = json;

        posts.map((item) => {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);

        })
    })
    .catch(() => {
        console.log("Deu algum erro");
    })
}

nutriApp();