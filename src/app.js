import express from 'express'
import textFeatures from './features.js'
import http from 'http'

const request = require("request");
const app = express()
const Discord = require('discord.js');
const bot = new Discord.Client();

function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }
}

bot.on('ready', () => {
  console.log('Azimute is ready!');
  // console.log(bot.channels)
});

bot.on('emojiCreate', emoji => {
  // get the channel by its ID
  let ch1 = bot.channels.get('286083241277128704');
  // général -> 286083241277128704
  // shitpost -> 287545957074206720
  // send the message, mentioning the member
  ch1.sendMessage(`Un nouvel emoji à été créé, ${emoji}!`);
});

bot.on('channelCreate', channel => {
  let ch3 = bot.channels.get('286083241277128704');
  ch3.sendMessage(`Le channel ${channel} a été créé`);
});

bot.on('disconnect', user => {
  let ch2 = bot.channels.get('286083241277128704');
  ch2.sendMessage(`${user}! has disconnected`);
});

bot.on('message', message => {
  if(textFeatures.indexOf(message.content) != -1)
  { 
    let theIndex = textFeatures.indexOf(message.content) + 1;
    message.delete()
      .then(msg => console.log(`${msg.author} Event`))
      .catch(console.error);
    message.reply(textFeatures[theIndex])
  }
});

// https://rainbowsix7nightbot.herokuapp.com/rainbowsix7.php?platform=uplay&nick=f0sterr.&command=rank



request({
  uri: "http://clementvion.fr",
  method: "GET",
  timeout: 150000,
  followRedirect: true,
  maxRedirects: 100
}, function(error, response, body) {
  console.log(body);
});

// setInterval(function() {
//   http.get('http://www.sansfrancis.co');
// }, 10000);

bot.login('Mjg2MTI1MjQ4OTc2MjU3MDI0.C5cQsA.dJ3tAoNGKMKXxTSeIQWh7RmGXtM');

app.listen(process.env.PORT || 3000)

