const db = require("../database.js");

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate.");
        
}

/*const ID = "412169234492293130";
  let users = client.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do SysopCorp");
  let role = client.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Woww! Você descobriu um recurso para parceiros. <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
   */


if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, o comando **filtro** está disponível apenas para usuários administrativos e gerenciadores de mensagens  do server.');
db.Guilds.findOne({"_id": message.guild.id }, function(erra, docu) {
if (docu) {

let nha;

if (!docu.convites) nha = `Ativado`;
else nha = `Desativado`;

if (!suffix) return message.reply(`<:sysalerta:469789950938841088> Você deve especificar um filtro. Filtros disponíveis: \`invites\``);
	
switch (suffix.split(' ')[0]){
	
case 'invites': {

if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.reply('<:xguardian:476061993368027148> Você precisa ter no minimo permissões de Gerenciamento de Mensagens para utilizar esse filtro.');

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply('<:xguardian:476061993368027148> Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.convites)
    			docu.convites = !docu.convites;
    			else 
    			docu.convites = true;
    			
    			docu.save();
    			message.channel.send(`OK! ${message.author}, filtro de convites: **${nha}** <:trust:447056422346424320>`);
    			
} 


}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}

});
});
}};
