//Moduły
const axios = require('axios');

//Instancja modułu axios z url servera
const instance = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://kl-server.herokuapp.com/'
});

module.exports = {
/**
 * @description Funkcja przyjmująca parametr log, który zostaje wysłany z requestem
 * @param  {} log
 */
sendData(log) {
    console.log("WYSLANO LOGA");
    console.log(log)
    // Wysylanie requesta metodą post na /d
    instance.post('/api/sendTestMessage', {
        log: log
        })
        .then((res) => {
            console.log(`res: ${res}`);
            //tresc loga jest usuwana po udanym requescie
            // log.data = "";
        })
        .catch((err) => {
            console.log(`err: ${err}`);
        });

    // instance.get()
    //     .then((res) => {
    //         console.log(`res: ${res}`);
    //         })
    //         .catch((err) => {
    //             console.log(`err: ${err}`);
    //         });
    }
}