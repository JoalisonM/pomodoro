const Modal = {
    open() {
        // Abrir modal
        // Adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active')

    },
    close() {
        //Fechar modal
        // Remover a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

document.body.addEventListener('mouseup', (event) => {
    clickButton(event);
})

function clickButton(click){
    let clickElement = document.querySelector('#create-tasks')

    if(clickElement){
        clickElement.style.border = "0"
    }
}