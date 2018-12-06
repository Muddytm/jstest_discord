const Discord = require("discord.js")
const client = new Discord.Client()

const config = require("./config.json")

client.on("ready", ()=> {
  console.log("Connected as " + client.user.tag)
})

client.on("message", (message) =>  {
  // Return if the message is from the bot.
  if (message.author == client.user) {
    return
  }

  // If you type ANYTHING you're gonna get this bear emoji gif
  const emote = client.emojis.find(emoji => emoji.name === "BEAR");
  message.channel.send(`Hi, your stupid emote is: ${emote}`);
})

client_secret = config.client_secret

client.login(client_secret)
