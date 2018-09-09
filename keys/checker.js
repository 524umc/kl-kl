const state = require('./state.js');
const rules = require('./rules.js');

//tablica z wartosci typu CapsLock
const stateArray = [
    "Tab", "Enter",
    "Left Shift", "Left Alt", "Left Control",
    "Right Shift", "Right Alt",  "Right Control"
];


const check = data =>{

    //Sprawdź wszystkie elementy w tablicy
    const arr = stateArray.filter(item =>{
        if(item === data.key){
            //Jeśli został użyty jakis klawisz z tej tablicy, zmien stan
            state.changeState(data);
            return data.key;
        }
    });

    //Jeśli nic nie znalazles, znaczy ze to zwykly znak
    if(arr.length === 0){
        rules.readRules(data)
    }
};


module.exports.check = check;