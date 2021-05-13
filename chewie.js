// variables
const Discord = require('discord.js');

// discord bot
const bot = new Discord.Client();

// online
bot.once('ready',()=>{
    console.log('Chewie is awake!')
})



// gives access to bot
bot.login('ODQyMjgxODQ5NjA2NjM1NTIw.YJzCGQ.vUITv3S8a389Ym8oRxwxFkn2pGk');
