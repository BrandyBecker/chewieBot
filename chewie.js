// variables
const Discord = require('discord.js');
const bot = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const prefix = '/';
require('dotenv').config();
const fs = require('fs');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//---------------------------------------------

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  //---------------------------------------------

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./cmds/${file}`)

    bot.commands.set(command.name, command);
}

//---------------------------------------------

// online
bot.once('ready',()=>{
    console.log('Chewie is awake!')
})

//---------------------------------------------

// message event
bot.on('message', message=> {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // commands 

    // /ping
    if(command === 'ping'){
        bot.commands.get('ping').execute(message, args);
    } else if (command === "reactionrole"){
        bot.commands.get('reactionrole').execute(message, args, Discord, bot)
    }

});


//---------------------------------------------

bot.login(process.env.BOT_TOKEN);
