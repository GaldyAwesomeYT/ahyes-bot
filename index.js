const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTQyMjQ3MTcyMTA2MjQ0MTU3.YghuDw.Jdim0fsbL4M39uHG7tu2MWWjbh4"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World")
    }
})

client.login(process.env.TOKEN)