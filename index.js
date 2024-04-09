const { CommandClient } = require('eris')

// tworzenie zjebanego bota
async function init(token) {
    const stupidAssBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // zarejestruj zjebana komende
    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'lol',
            description: 'nienawidze diskorda pozdro',
            type: 1,
        }])
        console.log(`zaproszenie do bota\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'Litwo, Ojczyzno moja ty jesteś jak zdrowie Ile cię trzeba cenić, ten tylko się dowie Kto cię stracił Dziś piękność twą w całej ozdobieWidzę i opisuję bo tęsknię po tobie.'
            })
            console.log('autodestrukcja...')
            process.exit(0)
        }
    })
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
