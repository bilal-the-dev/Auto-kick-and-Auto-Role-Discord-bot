# Discord Auto-Moderator Bot

Got a big Discord server and half the members are alt accounts? Looking for something that'll automatically manage these accounts by kicking them or assigning/removing roles? This bot is exactly what you need.

## Features

- **Automatic Kicking**: Kicks members whose account age is below a certain duration without any manual intervention.
- **Role Management**: Assigns or removes roles based on the account age.
- **Logging**: Logs all actions in a specified log channel for transparency and record-keeping.
- **Command**: `/kick [firstRole] [secondRole]` command to kick all members that do not have any of the specified role.
- **Auto functioning**: The bot performs the top 3 tasks automatically each 15 minutes.

## Configuration

To configure the bot, you need to set the following environment variables in the bot's configuration file:

```bash
TOKEN=''
GUILD_ID=1210249756358746143
ROLE_ID=1210250338670608454
LOG_CHANNEL_ID=1244244952372740217
KICK_LOG_CHANNEL_ID=1244244952372740217
```

### config.json

In the `config.json` file, you need to specify whether to enable kicking or role management, and set the account age duration:

```json
{
  "kick": false,
  "role": true,
  "duration": "3d"
}
```

**kick:** Set to true to enable automatic kicking of members whose account age is below the specified duration.
**role:** Set to true to enable role management based on account age.
**duration:** The account age duration in days. Members with account ages below this duration will be managed by the bot.

## For a configuration where the bot assigns roles to new accounts and does not kick any members:

```json
{
  "kick": false,
  "role": true,
  "duration": "3d"
}
```

## Commands

This command allows you to kick all members who do not have any of the specified role.

```bash
/kick [firstRole] [secondRole]
```

# Example Usage

If you want to kick all members who do not have the role Verified or VIP role, you would use:

```bash
/kick Verified Verified
```

This bot ensures that your Discord server remains clean and free of alt accounts, automatically managing members based on their account age.

## Social Media Links

For more information, visit my posts on:

- [Twitter](https://twitter.com/bilal_the_dev/status/1768520539155427707)
- [LinkedIn](https://www.linkedin.com/feed/update/urn:li:share:7174285804301651968/)
- [Facebook](https://www.facebook.com/permalink.php?story_fbid=pfbid02mXhoPTEx5YKmfP7Rzrnc2UbN12bufduivhfZSwm3Bp2A68gN3fKsDDpanCw3hL3Ul&id=61556182875591&__cft__[0]=AZXUVu8H3vFm8-mKrqog67-gftIXT58S3ewE0NZ0to1UuNNz7gmxc26Af8y_IaQYQVcxkORN1NFp0tRndFczCW55M7hv7gp5YWWIJKX9OZK_Ww&__tn__=%2CO%2CP-R)

## Installation

To get started with the bot, follow the general guide on how to run my Discord bots [here](https://github.com/bilal-the-dev/How-to-run-my-discord-bots). If you encounter any issues, please open an issue on GitHub.
