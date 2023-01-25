const { Menu } = require("electron")

function AdicionarMenu(janela) {

    const modelo = Menu.buildFromTemplate([

        {
            label: "Páginas",
            click: function() { janela.loadFile("./public/Paginas.html") }
        },

        {
            label: "Publicar",
            click: function() { janela.loadFile("./public/Publicar.html") }
        },

        {
            label: "Sair",
            role: "quit"
        }

    ])

    Menu.setApplicationMenu(modelo)

}

module.exports = AdicionarMenu