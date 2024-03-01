const btnEmoji = document.querySelector('#menu-page-img-emoji')
btnEmoji.addEventListener('click', mudarEmojiMenuPrincipal)
btnEmoji.innerHTML = '😎'

function mudarEmojiMenuPrincipal() {
    const emojis = ['😊', '😎', '😍', '🥳', '😂', '😜', '😇', '🤩', '😁', '🤔'];
    const randomPosition = Math.floor(Math.random() * emojis.length);
    
    btnEmoji.innerHTML = emojis[randomPosition]
}

const fundo = document.querySelector('#body')
const btnMudarFundo = document.querySelector('#btn-change-theme')
btnMudarFundo.addEventListener('click', mudarCorDoFundo)
btnMudarFundo.innerHTML = 'Dark-Mode'

var variable = false;

function mudarCorDoFundo() {
    if(variable === false) {
        fundo.classList.add("body")
        btnMudarFundo.innerHTML = 'Light-Mode'
        btnMudarFundo.classList.add("btn-dark-mode")
        variable = true;
        return
    } else {
        fundo.classList.remove("body")
        btnMudarFundo.innerHTML = 'Dark-Mode'
        btnMudarFundo.classList.add("btn-light-mode")
        variable = false
        return
    }

}