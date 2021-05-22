const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "state",
    description: "Get information about the bot",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["about"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message) => {
        let servers_count = message.client.guilds.cache.size;
        var myarray = [];
        message.client.guilds.cache.keyArray().forEach(async function (item, index) {

            let guildMember = message.client.guilds.cache.get(item).memberCount;
            myarray.push(guildMember)
        })
        let sum = myarray.reduce(function (a, b) {
            return a + b
        });

        let totalSeconds = message.client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes,  ${seconds} seconds\`\`\``;

        let embed = new MessageEmbed()

            //.setDescription(`**${message.client.user.username}** Information`)

            .setTitle(`Support Server`)
            .addFields(
                { name: "Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
                { name: "Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
                { name: "Uptime: ", value: uptime },
                { name: "Ping", value: `\`\`\`${Math.round(client.ws.ping)}ms\`\`\`` },
                { name: "BOT OWNER", value: `\<@748083936151732245>, <@755392862513922078>`}

            )

            .setAuthor(`${message.client.user.username} Information`, message.client.user.displayAvatarURL())

            .setURL(
                `${client.config.SupportServer}`
            )

            .setColor("BLUE");

        return message.channel.send(embed);
    }
};