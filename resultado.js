import { verificarTema, trocarTema } from "../../helpers/tema-helper.js"
const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente =document.querySelector("main button")
const botaoJogarNovamente = document.querySelector("main button")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaoJogarNovamente.addEventListener("click", JogarNovamente)
botaoJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeimg = document.querySelector(".assunto_icone img")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeimg.setAttribute("src", ../../assets/images/icon-${assunto.toLocaleLowerCase()}.svg)
    iconeimg.setAttribute("alt", icone de ${assunto})
    assuntoTitulo.innerHTML = assunto
    iconeImg.setAttribute("src", ../../assets/images/icon-${assunto.toLowerCase()}.svg)
    iconeImg.setAttribute("alt", icone de ${assunto})
    assuntoTitulo.innerText = assunto
}

alterarAssunto()
function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")
    sectionPontuacao.innerHTML = `
        ${divAssunto.outerHTML}
        <strong>${pontos}</strong>
        <p>de 10</p>
    `
}

function JogarNovamente() {
function jogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../../index.html"
}

inserirResultado()
