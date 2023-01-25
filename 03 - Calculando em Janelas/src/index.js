const { app, BrowserWindow } = require("electron")

app.whenReady()

    .then(function() {
        
        const janela = new BrowserWindow({
            
            autoHideMenuBar: true,
            
            height: 600,

            resizable: false,

            width: 600

        })
    
        janela.loadFile("./public/index.html")

    })