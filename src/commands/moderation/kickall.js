const {
  Client,
  Interaction,
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");
require("dotenv").config();
module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: async (client, interaction) => {
    try {
      const targetRole1 = interaction.options.get("target-role-1").value;
      const targetRole2 = interaction.options.get("target-role-2").value;

      await interaction.deferReply();

      if (!targetRole1 || !targetRole2)
        return await interaction.editReply(
          "The role does not exist in server anymore."
        );
      const members = await interaction.guild.members.fetch();

      const channel = client.channels.cache.get(
        process.env.KICK_LOG_CHANNEL_ID
      );

      for (const member of [...members.values()]) {
        if (
          member.roles.cache.has(targetRole1) ||
          member.roles.cache.has(targetRole2)
        )
          continue;

        try {
          await member.kick("Kicked by bot: has specific role");

          const kickEmbed = new EmbedBuilder()
            .setColor("#FF0000")
            .setTitle("Member Kicked")
            .setDescription(`**${member}** has been kicked.`)
            .setThumbnail(member.user.displayAvatarURL())
            .addFields(
              { name: "Member ID", value: `${member.id}`, inline: true },
              {
                name: "Reason",
                value: "Kicked by bot: has not specific role",
                inline: true,
              }
            )
            .setTimestamp()
            .setFooter({
              text: "Bot Action",
              iconURL: client.user.displayAvatarURL(),
            });

          await channel.send({ embeds: [kickEmbed] });
        } catch (error) {
          await channel.send(
            `Failed to kick ${member.user.tag} (${member.id}): ${error.message}`
          );
        }
      }

      await interaction.editReply("All users without the role has been kicked");
    } catch (error) {
      console.error(error);
    }
  },
  permissionsRequired: [PermissionFlagsBits.KickMembers],
  botPermissions: [PermissionFlagsBits.KickMembers],
  name: "kick",
  description: "kick speciifc  Users",
  options: [
    {
      name: "target-role-1",
      description:
        "The first role with whom you want to kick you want to kick.",
      type: ApplicationCommandOptionType.Role,
      required: true,
    },
    {
      name: "target-role-2",
      description:
        "The second role with whom you want to kick you want to kick.",
      type: ApplicationCommandOptionType.Role,
      required: true,
    },
  ],
};
