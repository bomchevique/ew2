const { app, BrowserWindow } = require("electron")

app.whenReady()

    .then(function() {

        const janela = new BrowserWindow({

            height: 350,

            frame: false,

            width: 300,

        })

        janela.loadFile("./public/index.html")

    })