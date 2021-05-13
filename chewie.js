// variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '/';
require('dotenv').config();
const fs = require('fs');

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
    }

});


//---------------------------------------------

bot.login(process.env.BOT_TOKEN);
