// Copyright (c) 2025 _kazuzu (Community Contribution)
// This plugin is part of the FlovereX Community Library.
// Licensed under the MIT License (Open Source).

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong (Community Plugin)'),
  async execute(interaction) {
    await interaction.reply('🏓 Pong! (This came from the community plugin folder!)');
  },
};