const btnAdicionar = document.querySelector('.btn-success');
const tarefas = document.querySelector('#tarefas');

btnAdicionar.addEventListener('click', adicionarLinha);

function adicionarLinha () {
    const novaRow = document.createElement('div');
    novaRow.innerHTML = `
        <div class="row d-flex justify-content-center">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Chebox para permitir input text">
                </div>
                </div>
                <input type="text" class="form-control flex-grow-1" aria-label="Input text com checkbox">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary btn-danger text-white" type="button" id="button-addon2">
                    <i class="bi bi-trash"></i>
                </button>
                </div>
            </div>
        </div>`
    tarefas.appendChild(novaRow);

    const novoCheckbox = novaRow.querySelector('input[type="checkbox"]');
    const novoInputText = novaRow.querySelector('input[type="text"]');
    const novoButton = novaRow.querySelector('button');

    function handleChecked(event) {
        novoInputText.disabled =  event.target.checked;
    }

    novoCheckbox.addEventListener('change', handleChecked);

    function handleRemoveRow() {
        tarefas.removeChild(novaRow);
    }
    
    novoButton.addEventListener('click', handleRemoveRow);
}

console.log("tarefas", tarefas);