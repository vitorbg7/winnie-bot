const { REST, Routes } = require('discord.js');

require('dotenv').config();
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: [] }
        );

        console.log('Todos os slash commands globais foram removidos.');
    } catch (error) {
        console.error(error);
    }
})();