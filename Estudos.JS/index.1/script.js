var area = document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome:");
    var curso1 = prompt("Qual seu primero curso?");
    var curso2 = prompt("Qual seu segundo curso?");


    if(nome == "" || nome == null){
        alert("Ops, algo deu errado!")
        area.innerHTML = "Clique no botão para acessar..."
    }else{
        area.innerHTML = "Seja bem vindo " + nome + ", ao curso de " + curso1 + " e " + curso2;

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = Sair;
/*
        let media = document.createElement("button");
        media.innerText = "Ver média"
        media.onclick = mediaAluno;
*/
        area.appendChild(botaoSair);
        //area.appendChild(media);

    }
}

function Sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu!"
}

function mediaAluno(nota1, nota2){

    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com a média: " + media)
    }else if(media < 7){
        console.log("Aluno reprovado com a média: " + media)
    }

}
