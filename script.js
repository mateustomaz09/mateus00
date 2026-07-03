const inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value = input.value.toUpperCase();

        if(input.value.length === 1 && index < inputs.length - 1){
            inputs[index + 1].focus();
        }

    });

});

function validar(){

    let codigo = "";

    inputs.forEach(input=>{
        codigo += input.value;
    });

    if(codigo.length !== 6){
        resultado.innerHTML = "<span style='color:red;'>Preencha todas as caixas.</span>";
        return;
    }

    let letras = (codigo.match(/[A-Z]/g) || []).length;
    let numeros = (codigo.match(/[0-9]/g) || []).length;

    if(letras >= 2 && numeros >= 3){
        resultado.innerHTML = "<span style='color:green;'>✔ Código válido!</span>";
    }else{
        resultado.innerHTML = "<span style='color:red;'>✖ O código deve conter pelo menos 2 letras maiúsculas e 3 números.</span>";
    }

}