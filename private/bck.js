const Discord = require("discord.js");
const database = require("../database.js");

exports.run = (client, message, args) => {
  
  if (!['282504900552949760','244489368717230090', '481829760369033228'].includes(message.author.id)) 
  return message.channel.send({
			embed: {
				color: 0xff2424,
				description:`Comando restrito, apenas proprietários do bot podem usar!`,
			}
		});
        let block = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.slice(0).join(' ')
            ? args.slice(0).join(' ')
            : null;

if (!block) return message.reply('Mencione alguém ou especifique um ID');
let user = client.users.has(block) ? client.users.get(block) : null;
if (user) {
    database.Bloqueio.findOne({"_id":user.id},function(erro,documento){
        
    if (documento) {
        
        documento.block = user.id
        message.reply(`O usuário: ${user.username} foi adicionado a blacklist`)
        documento.save();
    } else {
        var pessoa = new database.Bloqueio({
            _id: user.id,
            name: user.username, 
            block: user.id
          
        })
        pessoa.save()
message.reply(`O usuário: ${user.username} foi adicionado a blacklist`)
    }

})

} else {
    message.reply('Opa! Não acho que este usuário exista.');
}
};
