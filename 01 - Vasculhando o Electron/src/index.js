const { app, BrowserWindow } = require("electron")

function CriarJanela() {

    const janela = new BrowserWindow({
        
        height: 600,

        width: 800

    })

    janela.loadFile("./public/index.html")
}

app.whenReady()

    .then(function() {

        CriarJanela()

    })

    .catch(function(erro) {

        console.log(erro.message)

    })