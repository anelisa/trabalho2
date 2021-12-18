const btnPlay = document.querySelector('.btn-success');
const btnStop = document.querySelector('.btn-danger');
const btnPause = document.querySelector('.btn-warning');
const outputValue = document.querySelector('output');
btnPlay.addEventListener('click', () => computa('inicia'));
btnPause.addEventListener('click', () => computa('pausa'));
btnStop.addEventListener('click', () => computa('reinicia'));
let contagem = 0;
let estado = 'parado';
let timer;

function computa(acao) {
    switch(estado) {
        case 'parado':
            if(acao === 'inicia'){
                estado = 'rodando';
                timer = setInterval(() => computa('tick'), 100);
            }
            if(acao === 'reinicia') {
                contagem = 0;
            }
            break;
        case 'rodando':
            contagem = contagem + 0.1;
            if(acao === 'pausa'){
                estado = 'parado'
            }

            if(acao === 'reinicia') {
                estado = 'parado';
                contagem = 0;
            }
            break;
        default:
            console.log("acabou");
    }
    outputValue.innerHTML = contagem.toFixed(2) + "s";
}
