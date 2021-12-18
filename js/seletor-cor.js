// let botao = document.querySelector("#btnSubmit");

// botao.addEventListener('click', handlerClickBotao);

let formulario = document.querySelector('form');

formulario.addEventListener('submit', handlerClickBotao);

function handlerClickBotao(event) {
    let captureInput = document.querySelector('input');
    let captureBody = document.querySelector('body');

    // let corAnterior = captureBody.style.backgroundColor;
    captureBody.style.backgroundColor = captureInput.value;

    if(captureBody.style.backgroundColor === captureInput.value) {
        console.log("troquei a cor");
    }else {
        console.error("error");
    }
    


    console.log("input", captureInput.value);
    console.log("to aqui", event);
    event.preventDefault();
    return false;
}

