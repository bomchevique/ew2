const { app, BrowserWindow, ipcMain } = require("electron")

const { join } = require("path")

const FazerDownload = require("./functions/FazerDownload.js")

app.whenReady()

    .then(function() {

        const janela = new BrowserWindow({

            autoHideMenuBar: true,

            height: 200,

            icon: join(__dirname, "/public/icon.png"),

            resizable: false,

            width: 420,

            webPreferences: {

                preload: join(__dirname, "preload.js")

            }

        })

        janela.loadFile("./public/index.html")

        ipcMain.on("FazerDownload", FazerDownload)

    })