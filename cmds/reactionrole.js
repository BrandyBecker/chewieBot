
module.exports = {
    name: 'reactionrole',
    description: '',
    async execute(message, args, Discord, bot){
        const channel = '842267350278996009';
        const spaceCowboyRole = message.guild.roles.cache.find(
            role => role.name === "space-cowboys"
        );

        const alienRole = message.guild.roles.cache.find(
            role => role.name === "aliens"
        );

        const spaceTrashRole = message.guild.roles.cache.find(
            role => role.name === "space-trash"
        );

        const spaceCowboyEmoji = '🤠';
        const alienEmoji = '👽';
        const spaceTrashEmoji = '⭐';

        let embed = await new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle("I see you've made your way to the void! 🌌🛸 Welcome!")
        .setDescription('To gain access to the rest of the server, react to this message with either of these emojis:\n\n'
        + `${spaceCowboyEmoji} : space cowboys\n`
        + `${alienEmoji} : aliens\n`
        + `${spaceTrashEmoji} : space trash\n\n`
        + 'Choose wisely - you can choose just one or all of them! ❕\n'
        + 'Think of them as different families 💖\n' 
        + ' ( bots a wip by brandy uwu dm me for suggestions )');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(spaceCowboyEmoji);
        messageEmbed.react(alienEmoji);
        messageEmbed.react(spaceTrashEmoji);

        bot.on('messageReactionAdd', async(reaction,user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === spaceCowboyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(spaceCowboyRole);
                } else if (reaction.emoji.name === alienEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(alienRole);
                } else if (reaction.emoji.name === spaceTrashEmoji){        
                    await reaction.message.guild.members.cache.get(user.id).roles.add(spaceTrashRole);
                }
            }
            else {
                return;
            }
        })

        bot.on('messageReactionRemove', async(reaction,user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === spaceCowboyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(spaceCowboyRole);
                } else if (reaction.emoji.name === alienEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(alienRole);
                } else if (reaction.emoji.name === spaceTrashEmoji){        
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(spaceTrashRole);
                }
            }
            else {
                return;
            }
        })



    }
}