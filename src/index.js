/**
 * Iniciar o bot.
 */

//Carregar módulos
const Discord = require("discord.js");
const client = new Discord.Client();
const events = require("./events");
const accountConfig = require("./../config/account.json");
const eventsManager = require("./events/manager");
const commandsManager = require("./commands/manager");

//Carregar eventos
eventsManager.boot(client);

//Carregar comandos
commandsManager.boot();

//Logar-se
client.login(accountConfig.token);