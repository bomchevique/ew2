const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {

    Minimizar: function() {

        ipcRenderer.send("Minimizar")

    },
    
    Maximizar: function() {

        ipcRenderer.send("Maximizar")

    },

    Fechar: function() {

        ipcRenderer.send("Fechar")

    },

    AbrirPapo: function(codigo) {

        ipcRenderer.send("AbrirPapo", codigo)

    },

    EnviarMensagem: function(mensagem) {

        ipcRenderer.send("EnviarMensagem", mensagem)

    },

    ReceberMensagem: function() {

        return ipcRenderer.invoke("ReceberMensagem")

    }

})