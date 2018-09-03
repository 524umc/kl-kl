const state = require('./state.js');

const stateArray = []; //tablica z wartosci typu CapsLock
const keysArray = []; //tablica z reszta znakow

const check = key => {
    stateArray.map(item => {
        if(item === "key.released " + key){
        //    state.changeState()....
        }else {

        }
    })
};