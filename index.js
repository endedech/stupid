const { CommandClient } = require('eris')

// tworzenie zjebanego bota
async function init(token) {
    const stupidAssBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // zarejestruj zjebana komende
    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'random name',
            description: 'random description',
            type: 1,
        }])
        console.log(`bot invite\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'random test message'
            })
            console.log('ending')
            process.exit(0)
        }
    })
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
