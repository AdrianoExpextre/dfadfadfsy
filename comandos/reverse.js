module.exports = {
    description: 'Ulitize esse comando para eu modificar suas palavras e frases ao contrário.',
    categoria: 'Entretenimento',
    task(client, message) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
        let reversed = message.content.split(' ').slice(1).join(' ').split('').reverse().join('');
        message.reply(reversed);
    })
    }
};
