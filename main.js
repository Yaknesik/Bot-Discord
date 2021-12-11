const {Collection, Client, Discord} = require('discord.js')
const { token } = require('./konfiguracja.json');
const fs = require('fs')

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

client.once('ready', () => {
	console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~|')
	console.log('| Bot Gotowy do działanaia |')
	console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~|')
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["commandHandler", "eventHandler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.login(token);
