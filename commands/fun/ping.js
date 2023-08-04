const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, SlashCommandBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),


	async execute(interaction) {

		const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

	/*	const input = new TextInputBuilder()
	// set the maximum number of characters to allow
			.setMaxLength(1000)
	// set the minimum number of characters required for submission
			.setMinLength(10)
	// set a placeholder string to prompt the user
			.setPlaceholder('Enter some text!')
		// set a default value to pre-fill the input
			.setValue('Default')
	 // require a value in this input field
			.setRequired(true);*/

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);


		await interaction.showModal(modal);
	},
};





