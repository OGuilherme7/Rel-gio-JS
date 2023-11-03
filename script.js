setInterval(function(){

    const paragrafoUnidadeSegundos = document.getElementsByClassName("ponteiros")[5].querySelector("p");
    const paragrafoDecimalSegundos = document.querySelectorAll(".ponteiros")[4].querySelector("p");
    const paragrafoUnidadeMinutos = document.querySelectorAll(".ponteiros")[3].querySelector("p");
    const paragrafoDecimalMinutos = document.querySelectorAll(".ponteiros")[2].querySelector("p");
    const paragrafoUnidadeHoras = document.querySelectorAll(".ponteiros")[1].querySelector("p");
    const paragrafoDecimalHoras = document.querySelectorAll(".ponteiros")[0].querySelector("p");


    const paragrafosRelógio = {
        p1: paragrafoUnidadeSegundos,
        p2: paragrafoDecimalSegundos,
        p3: paragrafoUnidadeMinutos,
        p4: paragrafoDecimalMinutos,
        p5: paragrafoUnidadeHoras,
        P6: paragrafoDecimalHoras
    }

    setTimeout(function(){
        paragrafosRelógio.p1.classList.remove("fadeOut");
    }, 200)

    const valorUnidadeSegundos = getValueUnitySecond();
    const valorDecimalSegundos = getValueDecimalSecond();
    const valorUnidadeMinutos = getValueUnityMinute();
    const valorDecimalMinutos = getValueDecimalMinute();
    const valorUnidadeHoras = getValueUnityHour();
    const valorDecimalHoras = getValueDecimalHour();

    paragrafosRelógio.p1.innerText = valorUnidadeSegundos;
    paragrafosRelógio.p2.innerText = valorDecimalSegundos;
    paragrafosRelógio.p3.innerText = valorUnidadeMinutos;
    paragrafosRelógio.p4.innerText = valorDecimalMinutos;
    paragrafosRelógio.p5.innerText = valorUnidadeHoras;
    paragrafosRelógio.P6.innerText = valorDecimalHoras;

    paragrafosRelógio.p1.classList.add("fadeOut");


}, 1000)

function getValueUnitySecond() {
    let unitySecond;
    if (String(new Date().getSeconds()).length == 2) {
        unitySecond = String(new Date().getSeconds())[1];
    } else {
        unitySecond = String(new Date().getSeconds())[0];
    }
    return unitySecond;
}

function getValueDecimalSecond () {
    let decimalSecond;
    if (String(new Date().getSeconds()).length == 2) {
        decimalSecond = String(new Date().getSeconds())[0];
    } else {
        decimalSecond = "0";
    }
    return decimalSecond;
}

function getValueUnityMinute () {
    let unityMinute;
    if (String(new Date().getMinutes()).length == 2) {
        unityMinute = String(new Date().getMinutes())[1];
    } else {
        unityMinute = String(new Date().getMinutes())[0];
    }
    return unityMinute;
}

function getValueDecimalMinute() {
    let decimalMinute;
    if (String(new Date().getMinutes()).length == 2) {
        decimalMinute = String(new Date().getMinutes())[0];
    } else {
        decimalMinute = "0";
    }
    return decimalMinute;
}

function getValueUnityHour() {
    let unityHour;
    if (String(new Date().getHours()).length == 2) {
        unityHour = String(new Date().getHours())[1];
    } else {
        unityHour = String(new Date().getHours())[0];
    }
    return unityHour;
}

function getValueDecimalHour() {
    let decimalHour;
    if (String(new Date().getHours()).length == 2) {
        decimalHour = String(new Date().getHours())[0];
    } else {
        decimalHour = "0";
    }
    return decimalHour;
}
