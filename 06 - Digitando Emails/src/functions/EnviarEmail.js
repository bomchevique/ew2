const nodemailer = require("nodemailer")

const { dialog } = require("electron")

function EnviarEmail(evento, resultados) {

    const transportador = nodemailer.createTransport({

        service: "gmail",

        auth: {

            user: "pdrusr@gmail.com",

            pass: "qttbsxlodgmzvvcv"

        }

    })

    const mensagem = {

        from: "pdrusr@gmail.com",

        to: resultados.destino,

        subject: resultados.titulo,

        text: resultados.corpo

    }

    transportador.sendMail(mensagem)

        .then(function(resposta) {

            console.log(resposta)

            dialog.showMessageBox({

                type: "info",
                
                title: "Mensageiro Electron",
                
                message: `Email enviado com sucesso! \n${ resposta.accepted.join() }`
            
            })

        })

        .catch(function(erro) {

            console.log(erro)

        })

} 

module.exports = EnviarEmail