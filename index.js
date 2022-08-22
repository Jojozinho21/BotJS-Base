//db         88                                                     
//d88b        88                                                     
//d8'`8b       88                                                     
//d8'  `8b      88   ,d8   ,adPPYYba,  88,dPYba,,adPYba,    ,adPPYba,  
//d8d8d8d88b     88 ,a8"    ""     `Y8  88P'   "88"    "8a  a8P_____88  
//d8""""""""8b    8888[      ,adPPPPP88  88      88      88  8PP"""""""  
//d8'        `8b   88`"Yba,   88,    ,88  88      88      88  "8b,   ,aa  
//d8'          `8b  88   `Y8a  `"8bbdP"Y8  88      88      88   `"Ybbd8"'  
// ========================================================== //
require('dotenv').config()
// ========================================================== //
const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');

const config = require('./src/config/config.json');

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

client.discord = Discord;
client.commands = new Collection();
client.timeouts = new Collection();
client.config = require('./src/config/config.json')
client.slashCommands = new Collection();

require("./src/handler")(client);

client.login(config.token);
