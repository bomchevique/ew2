const { app, BrowserWindow, ipcMain } = require("electron")

const { join } = require("path")

const EnviarEmail = require("./functions/EnviarEmail.js")

app.whenReady()

    .then(function() {
        
        const janela = new BrowserWindow({

            autoHideMenuBar: true,

            height: 600,

            resizable: false,

            width: 600,

            webPreferences: {

                preload:  join(__dirname, "preload.js")

            }

        })
    
        janela.loadFile("./public/Compose.html")

        ipcMain.on("EnviarEmail", EnviarEmail)

    })