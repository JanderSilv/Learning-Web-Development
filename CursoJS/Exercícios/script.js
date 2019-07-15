function Atualizar() {
    window.location.reload()
}

function Carregar() {

    var msg = document.getElementById('msg')
    var sdc = document.getElementById('sdc')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `* Agora são ${hora} horas e ${minuto} minutos *`    

    if ((hora >= 0 && minuto >= 0) && (hora < 5 && minuto < 60)) {
        document.body.style.background = '#434340'
        sdc.innerHTML = "Boa Madrugada!"
        img.src = 'Imagens/foto_madrugada.png'
    }
    if ((hora >= 5 && minuto >= 0) && ((hora < 11 && minuto < 60) || (hora < 12 && minuto < 30))) {
        document.body.style.background = '#F3EF68'
        sdc.innerText = "Bom dia!"
        img.src = "Imagens/foto_manha.png"
    }
    if (((hora >= 11 && minuto >= 30) && (hora < 12 && minuto < 60)) || (hora >= 12 && minuto >= 0) && (hora >= 12 && hora < 14)) {
        document.body.style.background = '#EF5121'
        sdc.innerText = "Bom almoço!"
        img.src = "Imagens/foto_almoco.png"
    }
    if ((hora >= 13 && hora < 18) && (hora < 18 && minuto < 60)) {
        document.body.style.background = '#F79238'
        sdc.innerText = "Boa tarde!"
        img.src = "Imagens/foto_tarde.png"
    }
    if ((hora >= 18 && (hora < 24 && minuto < 60))) {
        document.body.style.background = '#2C2C2B'
        sdc.innerText = "Boa noite!"
        img.src = "Imagens/foto_noite.png"
    }

}
