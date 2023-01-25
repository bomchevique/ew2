const { app, BrowserWindow } = require("electron")

const AdicionarMenu = require("./functions/AdicionarMenu.js")

app.whenReady()

    .then(function() {

        const janela = new BrowserWindow({

            height: 640,

            resizable: false,

            width: 480

        })
    
        janela.loadFile("./public/Paginas.html")

        AdicionarMenu(janela)

    })