"use-strict";
const TelegramInterface = require('./telegram');
const functions = require('./util');
const fs = require('fs');
const TelegramBOT = new TelegramInterface(process.env.TOKEN);

module.exports = {
     Produção(client) {
        client.onMessage(async message=>{
            if((message.isGroupMsg === true)&&(message.from == process.env.GROUP_ID)){
                if(message.type == 'chat'){
                    let autor = functions.formatANATEL(message.author);
                    let mensagem = autor+'\n\n'+message.content;
                    TelegramBOT.enviarMensagem(process.env.ID, mensagem);
                }else{
                    const buffer = await client.decryptFile(message);
                    let file = functions.writeName(message.author, message.mimetype);
                    let dir = __dirname+'/temp/'+file;
                    
                    fs.writeFile(dir, buffer, ()=>{});
                    TelegramBOT.enviarDocumento(process.env.ID, dir, true);
                }
            }
        });
    },
    
    Debug(client){
        client.onMessage(async message=>{
            if(message.isGroupMsg === true){
                if(message.type == 'chat'){
                    let autor = functions.formatANATEL(message.author);
                    let mensagem = autor+'\n\n'+message.content;
                    TelegramBOT.enviarMensagem(process.env.ID, mensagem);
                }else{
                    const buffer = await client.decryptFile(message);
                    let file = functions.writeName(message.author, message.mimetype);
                    let dir = __dirname+'/temp/'+file;
                    
                    fs.writeFile(dir, buffer, ()=>{});
                    TelegramBOT.enviarDocumento(process.env.ID, dir, true);
                }
            }
        });
    }
}; 