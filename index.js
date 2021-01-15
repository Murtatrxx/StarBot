const express = require("express");
const app = express();
const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "Nzk5MTcwMDAyOTI5NzEzMTcy.X__rEA.swtuscbT3pigG6MFz79G8dkJQDo";
const prefix = "s!";

const embe = new Discord.MessageEmbed().setColor("#000000").setTitle("My Commands").addFields({name:"s!kiss" , value:":kiss: | You kiss the person you tagged"} ,{name: "s!marry", value: ":ring: | You marry the person you tagged"}, {name: "s!slap" , value:":head_bandage: | You slap the person you tagged"}, {name: "s!kill", value: ":knife: | You kill the person you tagged"}, {name: "s!hack", value:":computer: | You hack the person you tagged"}, {name: "s!kick" , value: ":left_right_arrow: | You kick the person you tagged"}, {name: "s!ban" , value: ":no_entry_sign: | You ban the person you tagged"}).setDescription("**Fun Commands**").setThumbnail("https://discord.com/assets/1cbd08c76f8af6dddce02c5138971129.png")

bot.once("ready" ,() => {
  bot.user.setActivity("s!commands | StarBot",{type: "PLAYING"});
  console.log("StarBot bot is online.");
});

bot.on("message", message => {
  if(message.content.startsWith(prefix + "commands")) {
    message.channel.send(embe);
  }
  if(message.content.startsWith(prefix + "kiss")) {
    const eıwd = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:kiss: | Kissed** ${message.mentions.users.first()}`).setImage("https://tenor.com/view/love-you-lots-kiss-peachcat-gif-13985240")
    message.channel.send(eıwd);
  }
  if(message.content.startsWith(prefix + "marry")) {
    const ıreoh = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:ring: | You married with** ${message.mentions.users.first()}`).setImage("https://tenor.com/view/the-simpsons-homer-simpson-wedding-bride-marriage-gif-4434861")
    message.channel.send(ıreoh);
  }
  if(message.content.startsWith(prefix + "hack")) {
    const eıwhr = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:computer: | Hacked** ${message.mentions.users.first()}**'s computer**`).setImage("https://tenor.com/view/pc-hack-hacker-guy-fawkes-mask-gif-17047235")
    message.channel.send(eıwhr);
  }
  if(message.content.startsWith(prefix + "kick")) {
    const emjs = new Discord.MessageEmbed().setColor("BLACK").setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv4e-dhc1exl__cZHoRhn83zkuQmZBQgcVA&usqp=CAU").setDescription(`**:no_entry_sign: | Kicked** ${message.mentions.users.first()}`)
    message.channel.send(emjs);
  }
  if(message.content.startsWith(prefix + "kill")) {
    const emwwws = new Discord.MessageEmbed().setColor("BLACK").setImage("https://tenor.com/view/threat-stewie-gun-murder-night-gif-5128179").setDescription(`**:knife: | Killed** ${message.mentions.users.first()}`)
    message.channel.send(emwwws);
  }
  if(message.content.startsWith(prefix + "ban")) {
    const ewws = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:no_entry_sign: | Banned** ${message.mentions.users.first()}`)
    message.channel.send(ewws);
  }
  if(message.content.startsWith(prefix + "hand-shake")) {
    const dsksfd = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:wave: | Hello** ${message.mentions.users.first()}`).setImage("https://tenor.com/view/predator-arnold-schwarzenegger-hand-shake-arms-gif-3468629")
    message.channel.send(dsksfd);
  }
  if(message.content.startsWith(prefix + "slap")) {
    const dsksfd = new Discord.MessageEmbed().setColor("BLACK").setDescription(`**:head_bandage: | You slapped** ${message.mentions.users.first()}`).setImage("https://tenor.com/view/predator-arnold-schwarzenegger-hand-shake-arms-gif-3468629")
    message.channel.send(dsksfd);
  }
  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!").then(m => {
      const ememem = new Discord.MessageEmbed().setColor("BLACK").addFields({name:`**:hourglass: | Ping: ${m.createdTimestamp - message.createdTimestamp}ms**`,value: `**:heartbeat: | API ${bot.ws.ping}ms**`});
      message.channel.send(ememem);
      m.delete();
    })
  }
  if(message.content.startsWith(prefix + "assign Mystic")) {
    message.reply("gave you Mystic role.");
    message.member.roles.add("🌈Mystic");
  }
});

bot.login(token);