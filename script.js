const form = document.getElementById('form-valid');

function formValidate(valorA,valorB) {
    return valorB > valorA
}

function reset(){
    let campos = document.querySelectorAll('input[type="number"]');
    campos.forEach(function (campo) {
    campo.value = "";
    });
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

const valorA = document.getElementById('campoA').value;
const valorB = document.getElementById('campoB').value;
const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;
const mensagemError = `Não é válido, o valor B: ${valorB} é igual o valor A: ${valorA}`;
const mensagemErro = `Não é válido, o valor B: ${valorB} é menor que o valor A: ${valorA}`;

    formValid = formValidate(valorA,valorB)
    if (formValid) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        

        valorA.value = '';
        valorB.value = '';

    } else if (valorB == valorA) {
        containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        
    } else {
        containerMensagemErro = document.querySelector('.erro-message')
        containerMensagemErro.innerHTML = mensagemErro;
        
    }
    reset();  
})


console.log(form);