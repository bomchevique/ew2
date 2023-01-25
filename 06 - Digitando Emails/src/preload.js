const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {

    EnviarEmail: function(resultados) {

        ipcRenderer.send("EnviarEmail", resultados)

    }

})