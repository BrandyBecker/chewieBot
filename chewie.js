// variables
const Discord = require('discord.js');
require('dotenv').config();

// discord bot
const bot = new Discord.Client();

// online
bot.once('ready',()=>{
    console.log('Chewie is awake!')
})


// gives access to bot, hides token 
// sneaky sneaky swiper
bot.login(process.env.BOT_TOKEN);
