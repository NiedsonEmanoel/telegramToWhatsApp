"use-strict";
require('dotenv').config()
const Start = require('./Start')
const venom = require('venom-bot');

venom.create('telegramToWhatsApp', undefined, undefined,{
    disableWelcome: true,
    useChrome: true,
    logQR: true,
    autoClose: 60*60*24*30*12*5
}).then((client)=>{Start.Debug(client);}).catch(e=>console.log(e));


