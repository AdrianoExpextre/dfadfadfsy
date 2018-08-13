const Discord = require("discord.js");
const client  = new Discord.Client();
const config  = require("./config.json");
const configuration  = require("./configuration.json");
const fs      = require("fs");
const YTDL = require('ytdl-core');
const modRole = ('Administrator');
var database = require("./database.js");
const db = require('quick.db');
const moment = require('moment');
let reload    = require('require-reload')(require),
	utils     = reload('./utils/utils.js'),
	comandos  = require('./utils/comandos.js'),
	logger    = new (require('./utils/Logger.js'))(config.logTimestamp);

 
 client.on("error", (e) => console.log(e));
  client.on("warn", (e) => console.log(e));
  client.on("debug", (e) => console.log(e));


client.on("ready", () => {
client.user.setPresence({
        status: 'Online',
        game: {
            name: `sy!help`,
            url: 'https://www.twitch.tv/expextreadriano'
        }
});
});

module.exports = {
	task(client, message, name) {
		if (name) {
			let comando = reload(`./comandos/${name}.js`);
			comando.usersOnCooldown = new Set();
			comandos.set(name, comando);
			return message.reply(`:cyclone: | O Comando ** ${name}** foi atualizado!`);
		} else
			return message.reply('Especifique um comando');
	}
};


fs.readdir("./comandos/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(name => {
		let nome = name.split('.')[0];
		require(`./comandos/${name}`).usersOnCooldown = new Set();
		comandos.set(nome, require(`./comandos/${name}`));
	});
});

  

client.on('ready', () => {
 var a = '244489368717230090';
var embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/429458467988832257/469723736300453901/SysopLogo.png')
    .setDescription(`<:SysopLogoEMOI:439565791357042700> Sysop foi reiniciado pelo heroku.\n\nSysopGuide reiniciado pelo clound9.\n\nMemória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MS`)
    .setColor(0x0df7eb);  							 
    client.users.get(a).send({embed});    
    
});

client.on("ready", () => {
   logger.logWithHeader('Estamos online!', 'bgRed', 'black',  `Online! S:${client.guilds.size} | U:${client.users.size}`);
});


module.exports = {
	task(client, message, name) {
	database.Guilds.findOne({"_id": message.guild.id}, function(erro, documento) {
        if (documento) return;
		if (!documento && documento.sugestao && message.channel.id == documento.sugestao)
	    message.react('439601495621763083').then(message.react('439601513472458752').then(
	    message.react('459002752891355147'))).catch(e => console.log(e));
	    
    });
	}};

const DBL = require ("dblapi.js");
const dbl = new DBL (config.DBL);

client.on ('ready', () => {
  setInterval (() => {
      dbl.postStats (client.guilds.size);
  }, 18000);
});

var slowCol = new Set();
client.on("message", message => {
    if (message.author.bot) return 

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, sysop) {

        if (!sysop) return 
        if (!sysop.slow) return 

        if (sysop) {
            if (sysop.slow === 1) return 


            if (!slowCol.has(message.author.id)) {
                slowCol.add(message.author.id);
                setTimeout(() => {
                    slowCol.delete(message.author.id)
                }, sysop.slow);
            } else {
                message.delete()
            }
        } else {
            if (!sysop) return 
            console.log("erro");
        }
    });
});


client.on('guildMemberAdd', (member) => {	
if (member.guild) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop.autorole) {
member.addRole(sysop.autorole);
sysop.save();
}}
});
}
});

client.on('guildMemberAdd', member => { 
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.welcomeChannel) return;
    if(!sysop.welcome) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel)) return;
  if (sysop) {
    let mensagem = sysop.welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    client.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel).send(mensagem)

    }
  })
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.dm) return;
  if (sysop) {
    let mensagem = sysop.dm.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    client.users.get(member.id).send(mensagem)
  }
  })
	  
//contador manu
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
		
let id = "462705495573135361";
let nww =  `${client.guilds.get(id).memberCount.toString()}`
let manu = nww.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('475739770996129802').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${manu} Colá la  que é sucesso https://www.facebook.com/discordmoon/` })
	})

//contador  god
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let idd = "447440828214935565";
let godzilla =  `${client.guilds.get(idd).memberCount.toString()}`
let aquaman = godzilla.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('473640254809702400').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${aquaman} BEM-VINDOS A GODZILLA! <a:pulo:458416272485646376> https://discord.gg/QhhAzat` })
	})
	

//contador  mickey
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let iddd  = "459794576627073024"
let disney =  `${client.guilds.get(iddd).memberCount.toString()}`
let land = disney.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('475549208225775649').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${land} BEM-VINDOS A DISNEY LAND! <a:pulo:458416272485646376>` })
	})
	
//contador  anime spirit
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let idddd  = "435957344782909440"
let anime =  `${client.guilds.get(idddd).memberCount.toString()}`
let spirit = anime.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('472087921072013312').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${spirit} Bem-vindo (a) ao AnimeSpirit seu Otaku! :nomparty:` })
	})	

//contador + setador
/*database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

if (!sysop.contador) return;
if (sysop) {

let serverID = member.guild.id
let contador =  `${client.guilds.get(serverID).memberCount.toString()}`
let number = contador.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get(sysop.contador).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${number}`})
    }})*/
	
});

client.on('guildMemberRemove', member => {

  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.byeChannel) return;
    if(!sysop.bye) return;
    if(!client.guilds.get(member.guild.id).channels.get(sysop.byeChannel)) return;
  if (sysop) {
    let mensagem = sysop.bye.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    client.guilds.get(member.guild.id).channels.get(sysop.byeChannel).send(mensagem)
  }
  })
	
	//contador manu
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
		
let id = "462705495573135361";
let nww =  `${client.guilds.get(id).memberCount.toString()}`
let manu = nww.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('475739770996129802').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${manu} Colá la  que é sucesso https://www.facebook.com/discordmoon/` })
	})

//contador  god
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let idd = "447440828214935565";
let godzilla =  `${client.guilds.get(idd).memberCount.toString()}`
let aquaman = godzilla.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('473640254809702400').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${aquaman} BEM-VINDOS A GODZILLA! <a:pulo:458416272485646376> https://discord.gg/QhhAzat` })
	})

//contador  mickey
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let iddd  = "459794576627073024"
let disney =  `${client.guilds.get(iddd).memberCount.toString()}`
let land = disney.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('475549208225775649').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${land} BEM-VINDOS A DISNEY LAND! <a:pulo:458416272485646376>` })
	})
	
//contador  anime spirit
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

let idddd  = "435957344782909440"
let anime =  `${client.guilds.get(idddd).memberCount.toString()}`
let spirit = anime.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get('472087921072013312').edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${spirit} Bem-vindo (a) ao AnimeSpirit seu Otaku! :nomparty:` })
	})	

//contador + setador

/*database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {

if (!sysop.contador) return;
if (sysop) {

let serverID = member.guild.id
let contador =  `${client.guilds.get(serverID).memberCount.toString()}`
let number = contador.replace(/0/gi, ':zero:').replace(/1/gi, ':one:').replace(/2/gi, ':two:').replace(/3/gi, ':three:').replace(/4/gi, ':four:').replace(/5/gi, ':five:').replace(/6/gi, ':six:').replace(/7/gi, ':seven:').replace(/8/gi, ':eight:').replace(/9/gi, ':nine:');
client.channels.get(sysop.contador).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${number}`})
    }})*/	
	
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {	
message.delete();
return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000));
}}
});
}
});

client.on("messageUpdate", (newMessage, oldMessage) => {	
if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erro, sysop) {
if (sysop) {
if (sysop && sysop.convites && oldMessage.content.search('discord.gg') > -1) {
oldMessage.delete();
return newMessage.channel.send(`<:xguardian:476061993368027148> | ${newMessage.author} Você não pode enviar convites de outros servidores aqui!. **Nem mesmo editando**`).then(sentMsg => sentMsg.delete(60000)) 
}}
});
}
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('👍').then(message.react('👎')).then(message.react(':FalseSysop3:462306755150479372'))  
}
});
}
});

client.on('message', message => {
    if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (oldMessage.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					oldMessage.delete();
					newMessage.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
  
  
 
  try {   
         //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./private/${command}.js`);
    commandFile.run(client, message, args);
  }catch (err) {
   
 
  }
 
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


          

client.on('message', message => {
	let settings = reload('./settings.json');
    let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0],
	suffix  = message.content.replace(config.prefix + comando, '').trim();
	if (message.content.startsWith(config.prefix) && comandos.has(comando)) {
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		 comando = comandos.get(comando.toLowerCase());                                   
		if (comando.usersOnCooldown.has(message.author.id))
			return message.reply(':warning: Você só pode utilizar este comando a cada ' + comando.cooldown + ' segundos!').then(sentMsg => sentMsg.delete(8000));
		else {
			comando.task(client, message, suffix);
			if (comando.cooldown) {
				comando.usersOnCooldown.add(message.author.id);
				setTimeout(() => {
					comando.usersOnCooldown.delete(message.author.id);
				}, comando.cooldown * 1000);
			}
		} 
		
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, `\`${message.author.tag}\``, true)
        .addField(`ID do Executor`, `\`${message.author.id}\``, true)
        .addField(`Comando usado:`, `\`\`\`Markdown\n# ${message.content}\`\`\``,false)
        .addField(`Dentro do server:`,`\`\`\`Markdown\n# ${message.guild.name}\`\`\``,false)
        .addField(`Canal onde foi Executado`,`\`${message.channel.name}\``,true)
	.addField(`Total de usuários`, `\`${server.memberCount}\``, true)	
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x0df7eb);
        
        client.guilds.get('307956208042770433').channels.get('470328436540571662').send({ embed });
	}
});

client.on('guildCreate', guild => {
  let ID = "244489368717230090";

  
    console.log(`O servidor: ${guild.name}  adicionou o seu bot `)
    
    const embed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    
        .setColor(0x4959e9)
        .addField("GOD", `**O servidor: __${guild.name}__ >adicionou o bot ___${client.user.username}__: ** `)
        .setThumbnail(guild.iconURL)
        .addField("Dono:",`<@${guild.ownerID}>`,true)
        .addField("Membros:",`${guild.members.size}`,true)
        .addField(":smiling_imp: __**Servidores atuais:**__", `\`\`\`js\n${client.guilds.size}\`\`\``)
 
        .setTimestamp()
        client.guilds.get("393818943246172161").members.map(a =>
        client.users.get(a.id).send({embed})) 
        
							  
});

client.login(process.env.QQ);
