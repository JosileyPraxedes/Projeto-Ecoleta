//pegando o botão
const buttonSearch = document.querySelector("#page-home main a")

//quando clicar no botão search, pegar o modal
const modal = document.querySelector("#modal")

//quando clicar no 'a' 
const close = document.querySelector("#modal .header a")

//quando clicar no botão, um evento de click de remover o hide
buttonSearch.addEventListener("click", () =>{
    modal.classList.toggle("hide")
})

//quando usar o closeadd executa uma função anonima que chama o modal e adiciona a lista de classes e adicionar o hide
close.addEventListener("click", () => {
    modal.classList.add("hide")
})