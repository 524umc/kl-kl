//Moduły
const axios = require('axios');

//Instancja modułu axios z url servera
const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

module.exports = {
/**
 * @description Funkcja przyjmująca parametr log, który zostaje wysłany z requestem
 * @param  {} log
 */
sendData(log) {
    //Wysylanie requesta metodą post na /d
    instance.post('/d', {
        log: log
        })
        .then((res) => {
            console.log(`res: ${res}`);
            log.data = ""; //tresc loga jest usuwana po udanym requescie
        })
        .catch((err) => {
            console.log(`err: ${err}`);
        });
    }
}