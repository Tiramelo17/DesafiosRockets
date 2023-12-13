
let darkMode = true
const buttonMode = document.querySelector("#toggle-mode")



buttonMode.addEventListener('click',handlerModePage)


function handlerModePage(event){

    const mode = darkMode ? 'light' : 'dark'
    darkMode = !darkMode
    console.log(event.currentTarget.querySelector('span'))
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado! `

    const htmlPage = document.querySelector("html")
    htmlPage.classList.toggle('light')
}


