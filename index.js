"use-strict";
require('dotenv').config()
const Start = require('./js/Start')
const venom = require('venom-bot');

venom.create('telegramToWhatsApp', undefined, undefined,{
    disableWelcome: true,
    useChrome: true,
    logQR: true,
    autoClose: 60*60*24*30*12*5
}).then((client)=>{
    switch(process.env.isPRODUCTION) {
        case "0":
            Start.Debug(client);
            console.clear();
            console.log('Conectado em modo Desenvolvimento');
            break;
        case "1":
            Start.Produção(client);
            console.clear()
            console.log('Conectado em modo Produção');
            break;
        default:
            console.log('Não foi possível determinar o início do sistema\nO Arquivo .env está definido?');
            throw('isPRODUCTION ERROR');   
    }
}).catch(e=>console.log(e));

