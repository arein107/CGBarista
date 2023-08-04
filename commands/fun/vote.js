const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Vote for Cafe Gaming!'),
		/*.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false), */

	async execute(interaction) {
		//const target = interaction.options.getUser('target');
		//const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const medRoast = new ButtonBuilder()
			.setLabel('Vote for Medium Roast')
			.setURL('https://discord.js.org')
			.setStyle(ButtonStyle.Link);

		const redEye = new ButtonBuilder()
			.setLabel('Vote for Red Eye Roast')
			.setURL('https://discord.js.org')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder()
			.addComponents(redEye, medRoast);

		await interaction.reply({
			content: `Thanks for voting!`,
			components: [row],
		});
		//await interaction.reply(`vote`);
		//await interaction.guild.members.ban(target);
	},
};

