
// utilização de objetos literais
export const Modal = {
    modal: document.querySelector('.modal-wrapper'),

    open(){
        Modal.modal.classList.add('open')
    },
    close(){
        Modal.modal.classList.remove('open')
    }
}



