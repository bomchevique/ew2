const { app, BrowserWindow, ipcMain } = require("electron")

const { join } = require("path")

app.whenReady()

    .then(function() {

        const janela = new BrowserWindow({

            autoHideMenuBar: true,

            frame: false,

            minHeight: 600,

            icon: join(__dirname, "public/icon.png"),

            title: "Station",

            minWidth: 960,
            
            webPreferences: {

                preload: join(__dirname, "preload.js")

            }

        })

        janela.loadFile(join(__dirname, "public/PaginaInicio.html"))

        ipcMain.on("Minimizar", function() {

            janela.minimize()

        })

        ipcMain.on("Maximizar", function() {

            janela.isMaximized() ?

                janela.unmaximize() : janela.maximize()

        })

        ipcMain.on("Fechar", function() {

            app.quit()

        })

    })