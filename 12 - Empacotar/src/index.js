const { app, BrowserWindow, ipcMain } = require("electron") 

const sysinfo = require("systeminformation")

const { join } = require("path")

app.whenReady() 

    .then(function() { 

        const janela = new BrowserWindow({

            autoHideMenuBar: true,

            backgroundColor: "#fff",

            center: true,

            height: 300,

            icon: join(__dirname, "icon.png"),

            resizable: false,

            title: "Empacotar",

            width: 300,

            webPreferences: {

                preload: join(__dirname, "preload.js")

            }

        })

        janela.loadFile( join(__dirname, "index.html") )


        ipcMain.handle("ObterDados", async function() {

            return sysinfo.cpu()

        })
    }) 
