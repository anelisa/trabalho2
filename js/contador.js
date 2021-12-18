const buttonPlus = document.querySelector('.btn-success');
const buttonDash = document.querySelector('.btn-danger');

buttonPlus.addEventListener('click', () => sum(+1));
buttonDash.addEventListener('click', () => sum(-1));

const outputValue = document.querySelector('output');

function sum (num) {
    const valorAtual = +outputValue.innerHTML + num;
    outputValue.innerHTML = valorAtual;

    if (valorAtual > 0) {
        outputValue.classList.add('text-success');
    } else if (valorAtual < 0) {
        outputValue.classList.add('text-danger');
    } else {
        outputValue.classList.remove('text-success');
        outputValue.classList.remove('text-danger');
    }
}
