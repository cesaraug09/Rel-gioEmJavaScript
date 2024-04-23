var txthora = document.getElementById('horas')
var txtdia = document.getElementById('dia')
var txtdata = document.getElementById('data')
var agora = new Date()

const loop = setInterval(()=>{
    var agoraIn = new Date()
    var hora = agoraIn.getHours()
    var minutos = agoraIn.getMinutes()
    var segundos = agoraIn.getSeconds()
    txthora.innerHTML = `<i>${hora}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
},100);

var diaSemana = agora.getDay()

switch(diaSemana){
    case 0:
        txtdia.innerHTML = "-Domingo-"
    break
    case 1:
        txtdia.innerHTML = "-Segunda-"
    break
    case 2:
        txtdia.innerHTML = "-Terça-"
    break
    case 3:
        txtdia.innerHTML = "-Quarta-"
    break
    case 4:
        txtdia.innerHTML = "-Quinta-"
    break
    case 5:
        txtdia.innerHTML = "-Sexta-"
    break
    case 6:
        txtdia.innerHTML = "-Sábado-"
    break
}

var dataDia = agora.getDate()
var dataMes = agora.getMonth()+1
var dataAno = agora.getFullYear()
txtdata.innerHTML = `-${dataDia.toString().padStart(2, '0')}/${dataMes.toString().padStart(2, '0')}/${dataAno}-`
