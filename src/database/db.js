//Configuração do banco de dados
//importando dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criando o objeto que vai fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//usando module, para usar require numa constante em outro arquivo
module.exports = db

//ultilizando o objeto para as operações
//com comando SQL
/* db.serialize(() => {
    //criando uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserindo dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items     
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Papersider",
        "Alameda dos Voadores, Subindo",
        "Número 69",
        "Rio de Janeiro",
        "São Gonçalo",
        "Papéis e Papelão"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this) //referenciando a reposta do run
    }

    //inserindo dados
    //antes de fazer a consulta, colocar as barras
    db.run(query, values, afterInsertData) 

    //consultando dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
         //tratamento do erro
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão os seus regristos: ")
        console.log(rows)
    })

    //deletando dados da tabela:
        //deletando da tabela places aonde o id é igual a 1 - colocar numero de registro que quer deletar
        //db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        //    if(err) {
        //        return console.log(err)
        //    }
        //    console.log("Registro deletado com sucesso!")
        //})

}) */