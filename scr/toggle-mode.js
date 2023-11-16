export const btnToggle = document.getElementById('toggle-button')
let lightDark = true

btnToggle.addEventListener('click',(event) => {

    document.documentElement.classList.toggle('light')

    const mode = lightDark? "light" : "Dark"

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    lightDark = ! lightDark
})

function modeToggle (event){
    d
}