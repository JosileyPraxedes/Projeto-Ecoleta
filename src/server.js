//usando express para usar servidor
const express = require("express")
//executando o express no server
const server = express()


// configurando pasta pública
server.use(express.static("public"))


//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurando os caminhos da aplicação
//página inicial
//req - requisição
//res - resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})


//ligar o servidor
server.listen(3000)