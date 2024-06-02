const cron = require("node-cron");

const { check } = require("../../utils/members");
const { kick, role } = require("../../../config.json");

const { GUILD_ID } = process.env;
module.exports = (client) => {
  console.log(`${client.user.tag} is online.`);
  const init = async function () {
    try {
      console.log("Running every fifteen minutes");
      if (kick && role)
        return console.log("Either Kick or Role should be true in the config");
      const guild = client.guilds.cache.get(GUILD_ID);

      console.log(GUILD_ID);

      const members = await guild.members.fetch();

      await check(members.values());
    } catch (error) {
      console.log(error);
    }
  };

  cron.schedule("*/15 * * * *", init);

  init();
};
