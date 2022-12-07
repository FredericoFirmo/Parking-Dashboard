const total = document.getElementById("totalvagas");
const emuso = document.getElementById("vagasemuso");
const livre = document.getElementById("vagaslivre");
const estacionamento = document.getElementsByClassName("estacionamento");
var url = "http://127.0.0.1/contagem/";

function GetVagas(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    console.log(xhttp.responseText);
    var vagas = xhttp.responseText;
    var obj = JSON.parse(vagas);
    total.textContent = obj.Totalvagas;
    emuso.textContent = obj.EmUso;
    livre.textContent = obj.Livre;
    
    if(obj.Livre == 0)
    {
        estacionamento[0].style.background = "#D91E2E";
    }
    else
    {
        estacionamento[0].style.background = "#2F9E41";
    }
}

setInterval(GetVagas, 10000);
