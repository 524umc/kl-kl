const state = require('./state.js');
const rules = require('./rules.js');

//tablica z wartosci typu CapsLock
const stateArray = [
    "Tab", "Caps Lock", "Left Shift",
    "Left Alt", "Right Control", "Right Shift",
    "Enter"
];


const check = data =>{

    //Sprawdź wszystkie elementy w tablicy
    stateArray.map(item =>{
        if(item === data.key){
            //Jeśli został użyty jakis klawisz z tej tablicy, zmien stan
            state.changeState(data)
        }else {
            //Jeśli jest to normalny znak, wyślij go do reguł
            rules.goThroughRules(data.key);
        }
    })
};


module.exports.check = check;