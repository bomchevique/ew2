const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {

    ObterDados: function() {

        return ipcRenderer.invoke("ObterDados")

    }

})