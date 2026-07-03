
const inputs = document.querySelectorAll(".caixas input");

function gerarSenha(){

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";

    let senha = [];

    // 2 letras
    for(let i=0;i<2;i++){
        senha.push(letras[Math.floor(Math.random()*letras.length)]);
    }

    // 3 números
    for(let i=0;i<3;i++){
        senha.push(numeros[Math.floor(Math.random()*numeros.length)]);
    }

    // último caractere (letra ou número)
    const todos = letras + numeros;
    senha.push(todos[Math.floor(Math.random()*todos.length)]);

    // Embaralhar (Fisher-Yates)
    for(let i=senha.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [senha[i],senha[j]]=[senha[j],senha[i]];
    }

    inputs.forEach((input,index)=>{
        input.value=senha[index];
    });

    document.getElementById("resultado").innerHTML="Senha gerada!";
    document.getElementById("resultado").style.color="green";
}

function validar(){

    let senha="";

    inputs.forEach(input=>{
        senha+=input.value;
    });

    const letras=(senha.match(/[A-Z]/g)||[]).length;
    const numeros=(senha.match(/[0-9]/g)||[]).length;

    if(letras>=2 && numeros>=3){
        document.getElementById("resultado").innerHTML="✔ Senha válida";
        document.getElementById("resultado").style.color="green";
    }else{
        document.getElementById("resultado").innerHTML="✖ Senha inválida";
        document.getElementById("resultado").style.color="red";
    }

}