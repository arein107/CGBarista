const { Events } = require('discord.js');

module.exports = {

	name: Events.InteractionCreate,
	async execute(interaction) {

		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		/*if (!interaction.isModalSubmit()) return;
		if (interaction.customId === 'myModal') {
			await interaction.reply({ content: 'Your submission was received successfully!' });
		}*/

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};

