var database = require("../database.js")
var dayCol = new Set()
let dayRDM = Math.round(Math.random() * 2500)

module.exports = {
    categoria: 'Economia',
    description: 'Assalte seu amigo e roube algumas coisinhas!',
       task(client, message, suffix) {
           
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
       
      if (['244489368717230090','481829760369033228', '345014174004543488', '431334258653528066'].includes(message.mentions.users.first().id))
      return message.channel.send(`<:sysalerta:469789950938841088> | Opa ${message.author} você não pode roubar este usuário.`)    
            
    
    let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.reply("**Você já roubou hoje. :confused:**");

    if (message.mentions.users.size < 1) {
        message.reply("**Mencione alguém para roubar. :confused:**");
    } else {
        if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode roubar você mesmo!**");
        if (message.mentions.users.first().bot) return message.reply("**Você não pode roubar um bot!**");

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        if(doc2.coins > 1000) {

                        if (Math.round(Math.random() * 1) == 1) {

                            documento.coins += dayRDM
                            documento.save();
                            doc2.coins -= dayRDM
                            doc2.save();
                            message.reply("<a:festa:479062708491124757> **Sucesso! Você roubou " + Number(dayRDM).toLocaleString() + " coins de <@" + message.mentions.users.first().id + ">.**");
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)

                        } else {
                            documento.coins -= dayRDM
                            documento.save();
                            message.channel.send(`<a:pm:436911890770165760> Ih ${message.author} sujo! Você foi pego ao tentar roubar <@${message.mentions.users.first().id}> e perdeu ${Number(dayRDM).toLocaleString()} Sycoins!`);
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)
                        }

                    } else {
                        message.reply("**Este usuário é muito pobre para ser roubado. :confused:**");
                    }

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            conquistas: 0,
                            mensagens: 0,
                            msglevel: 0,
                            invitetru: false,
                            invitecode: "Nenhum",
                            invitou: 0,
                            warn: 0,
                            rep: 0
                        })

                        pessoa.save()

                    }

                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        conquistas: 0,
                        mensagens: 0,
                        msglevel: 0,
                        invitetru: false,
                        invitecode: "Nenhum",
                        invitou: 0,
                        warn: 0,
                        rep: 0
                    })

                    pessoa.save()

                }

            })

        })


    }
    })

}};
