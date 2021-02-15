"use-strict";
const telegramBOT = require('node-telegram-bot-api');
const fs = require('fs');

module.exports = class TelegramBot {
    #BotTelegram;
    constructor(Token) {
        this.#BotTelegram = new telegramBOT(Token); 
    }

    enviarMensagem(id, message) {
        this.#BotTelegram.sendMessage(id, message).then(()=>console.log('Mensagem enviada')).catch((e)=>{console.log('Error '+e)});
    }

    enviarDocumento(id, dir, deleteAtEnd){
        try{
            const fileBuffer = fs.createReadStream(dir);
            this.#BotTelegram.sendDocument(id, fileBuffer);

            if(deleteAtEnd == true){
                fs.unlink(dir, ()=>{});
            }
        }catch(e){
            console.log('Error '+e);
        }
    }
};