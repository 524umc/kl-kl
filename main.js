const electron = require('electron');
//przypisanie do zmiennych, potrzebnych obiektów electrona
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const createApp = () => {
    //tworzenie nowego okna z opcjami niewidoczności i braku ikonki na pasku zadań
    const win = new BrowserWindow({
        show: false,
        skipTaskbar: true
    });
    console.log('Aplikacja działa w tle')
};

app.on('ready', createApp);