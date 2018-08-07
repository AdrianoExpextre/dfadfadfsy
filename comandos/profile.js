const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

module.exports = {
  categoria: 'Entretenimento',
  description: 'Tenha um perfil personalizado com seu nível, xp, emblemas, moedas e muito mais!',
  task(client, message, suffix) {
    
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
      if (message.author.bot) return 'Bots não podem usar esse comando :) ';


    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.d.png",
      "idle": "./status/idle.d.png",
      "dnd": "./status/dnd.d.png",
      "offline": "./status/invisible.d.png",
      "stream": "./status/.d.png"
      
};
        try {
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function(letra) {
            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function(letra2) {
             Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(letra3) {
               Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letr) {
              Jimp.read("https://cdn.discordapp.com/attachments/413155538755649538/433097929234841602/InvisibleSysop.png", function(erre, img) {
                Jimp.read(`${documento.profile_background}`).then(function(background) {
                  Jimp.read("./Emblemas/Level" + documento.level + ".png").then(function(emblema) {
                   // Jimp.read(user.username).then(function(user) {
                    Jimp.read(`${user.avatarURL}`).then(function(avatar) {
                      Jimp.read("https://cdn.discordapp.com/attachments/434166694999621644/438843435760222209/SysopNovoPerfil.png").then(function(perfil) {
                        Jimp.read(`./border/${documento.borderp}.png`).then(function(marco) {
                          Jimp.read(`./badges/${documento.badgep1}.png`).then(function(badge1) {
                            Jimp.read(`./badges/${documento.badgep2}.png`).then(function(badge2) {
                              Jimp.read(`./badges/${documento.badgep3}.png`).then(function(badge3) {
                              Jimp.read(`${imgcolor[user.presence.status]}`).then(function(status) {
                               Jimp.read("https://i.imgur.com/f55gYrh.png").then(function(mascara) {
                                 Jimp.read("./Xp_Sysop/xp ("+ parseInt(documento.xp/(pudim *400 )*100) +").png").then(function(pau) {

                            avatar.resize(276, 265);
                            mascara.resize(276, 265);
                            avatar.mask(mascara, 0, 0);
                            background.resize(745, 500);
                            emblema.resize(50, 54);
                            badge1.resize(35, 33);
                            badge2.resize(35, 32);
                            badge3.resize(35, 32);
                            status.resize(55, 55);
                        //  pau.resize(9,490)

                            img.composite(background, 20, 12);
                            img.composite(perfil, 0, 0);
                            img.composite(avatar, 20, 140);
                            img.composite(marco, 20, 140);
                            img.composite(emblema, 510, 12);
                            img.composite(badge1, 590, 15);
                            img.composite(badge2, 625, 15);
                            img.composite(badge3, 675, 15);
                            img.composite(pau, 22, 10);
                            img.composite(status, 235, 297);
                         // img.print(user, 415, 303);

                            img.print(letra, 300, 307, `${user.username}`);
                            img.print(letra, 530, 360, `${documento.level}`);
                            img.print(letra, 660, 360, `${Number(documento.xp).toLocaleString()}`);
                            img.print(letra2, 600, 523, `${Number(documento.emerald).toLocaleString()}`);
                         // img.print(letra, 160, 415, `${Number(documento.containers).toLocaleString()}`);
                            img.print(letra2, 90, 523, `${Number(documento.coins).toLocaleString()}`);
                            img.print(letra2, 360, 523, `${Number(documento.rubys).toLocaleString()}`);
                            img.print(letra, 705, 307, `${Number(documento.rep).toLocaleString()}`);
                            img.print(letra2, 33, 417, `\`\`${documento.bio}\`\``, 725);
                            img.print(letr, 200, 23, documento.xp + "/" +  Math.ceil(pudim * 400) + " (" + parseInt(documento.xp/(pudim *400 )*100) + "%)")  
                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'Profile.png'));
                              });
                            });
                          });
                        });
                       });
                      });
                    });
                  });
                });
              });
            });
          });
      //  });
      });
    });
  });
});
  });
          } catch (e) {
          message.channel.send('**Você está usando um plano de fundo inválido**');
        }
      } else {
        message.reply("**Você não tem um perfil.** :confused: Use: `sy!register`");
      }
    });
  })
  }
};