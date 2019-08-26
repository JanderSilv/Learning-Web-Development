function Atualizar() {
    window.location.reload()
}

function Carregar() {

    var msg = document.getElementById('msg');
    var sdc = document.getElementById('sdc');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerHTML = `* Agora são ${hora} horas e ${minuto} minutos *`    

    if ((hora >= 0 && minuto >= 0) && (hora < 5 && minuto < 60)) {
        document.body.style.background = '#434340'
        sdc.innerHTML = "Boa Madrugada!"
        img.src = 'Imagens/Horários/foto_madrugada.png'
    }
    if ((hora >= 5 && minuto >= 0) && ((hora < 11 && minuto < 60) || (hora < 12 && minuto < 30))) {
        document.body.style.background = '#F3EF68'
        sdc.innerText = "Bom dia!"
        img.src = "Imagens/Horários/foto_manha.png"
    }
    if (((hora >= 11 && minuto >= 30) && (hora < 12 && minuto < 60)) || (hora >= 12 && minuto >= 0) && (hora >= 12 && hora < 14)) {
        document.body.style.background = '#EF5121'
        sdc.innerText = "Bom almoço!"
        img.src = "Imagens/Horários/foto_almoco.png"
    }
    if ((hora >= 13 && hora < 18) && (hora < 18 && minuto < 60)) {
        document.body.style.background = '#F79238'
        sdc.innerText = "Boa tarde!"
        img.src = "Imagens/Horários/foto_tarde.png"
    }
    if ((hora >= 18 && (hora < 24 && minuto < 60))) {
        document.body.style.background = '#2C2C2B';
        sdc.innerText = "Boa noite!";
        img.src = "Imagens/Horários/foto_noite.png";
    }

    // setInterval(Carregar,10000);
    // setTimeOut(Carregar, 10000); Roda uma única vez em um delay
}

function Enviar() {

    var data = new Date()
    var ano = data.getFullYear()

    var txtNasc = document.getElementById('txtnasc')
    var txtSexo = document.getElementsByName('tSexo')
	
    var msg = document.getElementById('msg')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (Number(txtNasc.value) >= 1919 && Number(txtNasc.value) <= 1939) window.alert("Quase morrendo ein!?")
    if (Number(txtNasc.value) > 999 && Number(txtNasc.value) < 1919) window.alert("Tá fazendo o que vivo ainda?")
    if (Number(txtNasc.value) == ano) window.alert("Nasceu hoje?")

    if (txtNasc.value.length != 4) {
        window.alert("[ERRO] Digite um ano válido")  
    } 
    else if (Number(txtNasc.value) > ano) {
        window.alert(`Nasceu em ${txtNasc.value}!? É viajante do tempo?`)
    } else {
        var idade = ano - Number(txtNasc.value)
        var sexo, suf = ''

        if (txtSexo[0].checked) {
            sexo = 'Homem'

            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'Imagens/Pessoas/menino_branco.png')
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', 'Imagens/Pessoas/adolescente_negro.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'Imagens/Pessoas/homem_branco.png')
            } else {
                img.setAttribute('src', 'Imagens/Pessoas/idoso_branco.png')
            }

        } else {
            sexo = 'Mulher'
            suf = 'a'

            if (idade > 0 && idade < 12) {
                img.setAttribute('src', 'Imagens/Pessoas/menina_negra.png')
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', 'Imagens/Pessoas/adolescente_branca.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'Imagens/Pessoas/mulher_branca.png')
            } else {
                img.setAttribute('src', 'Imagens/Pessoas/idosa_negra.png')
            }
        }

        msg.innerHTML =  `Você é um${suf} ${sexo} e possui ${idade} anos`
        
        img.style.margin = "15px"
        msg.appendChild(img)
    }
}

function CalculaIntervalo() {
    // Recebe os valores dos formulários
    let txtNumInicial = document.getElementById('numeroInicial')
    let txtNumFinal = document.querySelector('input#numeroFinal')
    let txtValorStep = document.getElementById('valorStep')
    var mensagem = document.getElementById('msg')
    // Converte para Number
    let numInicial = Number(txtNumInicial.value)
    let numFinal = Number(txtNumFinal.value)
    var valorStep = Number(txtValorStep.value)
    // Verificação dos dados
    if (txtNumInicial.value.length == 0 || txtNumFinal.value.lenght == 0 || txtValorStep.value.lenght == 0) {
        alert ("[ERRO] Verifique os dados")
        mensagem.innerHTML = "Preencha os campos vazios"
    }
    else if (numInicial == numFinal) {
        alert("[ERRO] O valor inicial não pode ser igual ao final")
        mensagem.innerHTML = "Modifique o intervalo"
    }
    else if (valorStep > (numFinal+numInicial)) {
        alert("[ERRO] A passada é maior que o intervalo")
        mensagem.innerHTML = "Coloque um passo que seja menor que a soma dos valores"
    } else {

        if (valorStep <= 0) {
            alert("[ERRO] O valor da passada não pode ser 0, definido para 1")
            valorStep = 1;
        }    
        
        mensagem.innerHTML = `Contando: `

        if (numInicial < numFinal) {
            for (let i=numInicial; i <= numFinal; i+=valorStep) {              
                mensagem.innerHTML += `${i} 👉🏻 `
            }                        
        } else {
            for (let i=numInicial; i >= numFinal; i-=valorStep) {
                mensagem.innerHTML += `${i} 👉🏻 `
            }
        }
        mensagem.innerHTML += "🎯"
    }
}

function CalculaTabuada() {
            
    let txtNumTabuada = document.getElementById('numTabuada')
    let listaTabuada = document.querySelector('select#listaTabuada')  

    var numTabuada = Number(txtNumTabuada.value)

    if (txtNumTabuada == 0) {
        alert('[ERRO] Preencha o campo')
    } else {
        listaTabuada.innerHTML = ''
        for (let i=1; i<=10; i++) {
            let item = document.createElement('option')
            item.text = `${numTabuada} x ${i} = ${numTabuada * i}`
            item.value = `listaTabuada${i}`
            listaTabuada.appendChild(item)
        }
    }
}

let txtValor = document.getElementById('valor')
let listaValores = document.getElementById('listaValores')
let resultado = document.querySelector('div#res')
let valores = []

//let valor = txtValor.value

function inRange(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) return true
    else return false
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) return true
    else return false
}

function Adicionar() {

    if (inRange(txtValor.value) && !inLista(txtValor.value, valores)) {
        valores.push(Number(txtValor.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtValor.value} adicionado.`
        listaValores.appendChild(item)
        resultado.innerHTML = ""
    } else {
        alert("[ERRO] Valor inválido ou já encontrado na lista")
    }

    txtValor.value = ""
    txtValor.focus()

}

function Finalizar() {

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let qntElementos_ListaValores = valores.length

        resultado.innerHTML = ""
        resultado.innerHTML = '--------------------------------------------------------'
        resultado.innerHTML += `<p>1. Ao todo, temos <strong>${qntElementos_ListaValores}</strong> números cadastrados.</p>`
        resultado.innerHTML += `<p>2. O maior valor entre os números, é <strong>${maiorValor(valores)}</strong>.</p>`
        resultado.innerHTML += `<p>3. O menor valor entre os números, é <strong>${menorValor(valores)}</strong>.</p>`
        resultado.innerHTML += `<p>4. A soma dos números, é <strong>${somaValores(valores)}</strong>.</p>`
        resultado.innerHTML += `<p>5. A média dos números, é <strong>${somaValores(valores)/qntElementos_ListaValores}</strong>.</p>`
    }
}

function maiorValor(lista) {
    let maior = lista[0]

    for (let pos in lista) {
        if (lista[pos] > maior) maior = lista[pos]
    }
    return maior
}

function menorValor(lista) {
    let menor = lista[0]

    for (let pos in lista) {
        if (lista[pos] < menor) menor = lista[pos]    
    }
    return menor
}

function somaValores(lista) {
    let soma = 0

    for (let pos in lista) {
        soma += lista[pos]
    }
    return soma
}