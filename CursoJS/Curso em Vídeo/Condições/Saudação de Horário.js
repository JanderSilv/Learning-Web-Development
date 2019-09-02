var DateTime = new Date()
var hora = DateTime.getHours()
//var hora = 4
var minuto = DateTime.getMinutes()
//var minuto = 29

console.log(`Agora são ${hora}:${minuto}`)

if ((hora >= 0 && minuto >= 0) && (hora < 5 && minuto < 60)) console.log("Boa madrugada")
if ((hora >= 5 && minuto >= 0) && ((hora < 11 && minuto < 60) || (hora < 12 && minuto < 30))) console.log("Bom dia")
if (((hora >= 11 && minuto >= 30) && (hora < 12 && minuto < 60)) || (hora >= 12 && minuto >= 0) && (hora >= 12 && hora < 14)) console.log("Bom almoço")
if ((hora >= 13 && hora < 18) && (hora < 18 && minuto < 60)) console.log("Boa tarde")
if ((hora >= 18 && (hora < 24 && minuto < 60))) console.log("Boa noite")
