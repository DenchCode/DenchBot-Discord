const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log('DenchBot started sucessfully');
})

client.on('message', message => {
  if (message.content === 'test') {
    message.reply('test');
  }
});

client.login(auth.token);
