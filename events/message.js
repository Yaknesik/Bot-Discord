const client = require('../main.js');
const config = require('../config.json');

client.on('messageCreate', async message =>{
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})