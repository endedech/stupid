const { CommandClient } = require('eris')

// generating the bot
async function init(token) {
    const discordbot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // registering the command
    discordbot.on('ready', async () => {
        await discordbot.bulkEditCommands([{
            name: 'random name',
            description: 'random description',
            type: 1,
        }])
        console.log(`bot invite\nhttps://discord.com/oauth2/authorize?client_id=${discordbot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction creation event
    discordbot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'random test message'
            })
            console.log('ending')
            process.exit(0)
        }
    })
    discordbot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
