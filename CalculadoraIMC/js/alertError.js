export const alertErrorPopUp = {
    alertError : document.querySelector('.alert-error'),
    open(){
        alertErrorPopUp.alertError.classList.add('open')
    },
    close(){
        alertErrorPopUp.alertError.classList.remove('open')
    }
}