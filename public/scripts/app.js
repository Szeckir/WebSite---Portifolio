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
        if (btnMudarFundo.classList.contains("btn-light-mode")) {
            btnMudarFundo.classList.remove("btn-light-mode")
        }
        variable = true;
        return
    } else {
        fundo.classList.remove("body")
        btnMudarFundo.innerHTML = 'Dark-Mode'
        if (btnMudarFundo.classList.contains("btn-dark-mode")) {
            btnMudarFundo.classList.remove("btn-dark-mode")
        }
        btnMudarFundo.classList.add("btn-light-mode")
        variable = false
        return
    }
}

document.querySelector("#project-item-acerte-numero").addEventListener('onclick', abrirProjetoAcerteNumero)
var projectOpen = false;

function abrirProjetoAcerteNumero() {
    const btnClass = document.querySelector("#project-item-acerte-numero")
    const textClass = document.querySelector("#project-item-open-text")

    if(projectOpen == false) {
        btnClass.classList.remove("project-item")
        btnClass.classList.add("project-item-after-click")
        projectOpen = true;
        adicionarTextoAcerteNumero()
    } else {
        btnClass.classList.remove("project-item-after-click")
        btnClass.classList.add("project-item")
        textClass.innerHTML = ''
        projectOpen = false
    }
}

function adicionarTextoAcerteNumero() {
    const newText = document.querySelector("#project-item-open-text")

    newText.innerHTML += `
    <div class="project-item-text">
        <br>
        <p> Este jogo foi desenvolvido como forma de treinar e praticar meus conhecimentos de JavaScript, utilizando uma API de reconhecimento de fala. </p>        
        <br>
        <p> Este jogo também inclui noções básicas de HTML e CSS </p> 
        <br>
        <p> O jogo é muito intuitivo e fácil de jogar. </p>
    </div>

        <div class="project-images" id="project-img-acerte-numero">
            <img src="/public/images/acerte-numero-menu.png" alt="Imagem Jogo">
            <img src="/public/images/acerte-numero-playing.png" alt="Imagem Jogo">
        </div>
    `
}