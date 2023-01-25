const mongoose = require("mongoose")

const endereco = "mongodb+srv://admin:03yxzJ9v6hAISD3b@web.cfvnvjt.mongodb.net/?retryWrites=true&w=majority"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set("strictQuery", false)

mongoose.connect(endereco, configuracao)

    .then(function() {
        console.log("CONECTADO COM O BANCO DE DADOS!")
    })

    .catch(function(erro) {
        console.log(erro)
    })