var restify = require('restify');
var builder = 
require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || pro
cess.env.PORT || 3978, function () {
console.log('%s listening to %s', server.name, server.url); 
});
// Create chat bot
var connector = new builder.ChatConnector({
appId: 'f0bcf669-3473-4d17-bae7-985dd905b43b',
appPassword: 'ncqgrEZSI97+\%hqLPQ620|'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialo
g('/', function (session) {
session.send("Hello World");
});