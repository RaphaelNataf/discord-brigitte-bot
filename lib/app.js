'use strict';

var _features = require('./features.js');

var _features2 = _interopRequireDefault(_features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Discord = require('discord.js');
var bot = new Discord.Client();

function dump(obj) {
  var out = '';
  for (var i in obj) {
    out += i + ": " + obj[i] + "\n";
  }
}

bot.on('ready', function () {
  console.log('Azimute is ready!');
  // console.log(bot.channels)
});

bot.on('emojiCreate', function (emoji) {
  // get the channel by its ID
  var ch1 = bot.channels.get('287545957074206720');
  // général -> 286083241277128704
  // shitpost -> 287545957074206720
  // send the message, mentioning the member
  ch1.sendMessage('Un nouvel emoji \xE0 \xE9t\xE9 cr\xE9\xE9, ' + emoji + '!');
});

bot.on('channelCreate', function (channel) {
  var ch3 = bot.channels.get('286083241277128704');
  ch3.sendMessage('Le channel ' + channel + ' a \xE9t\xE9 cr\xE9\xE9');
});

bot.on('disconnect', function (user) {
  var ch2 = bot.channels.get('286083241277128704');
  ch2.sendMessage(user + '! has disconnected');
});

bot.on('message', function (message) {
  if (_features2.default.indexOf(message.content) != -1) {
    var theIndex = _features2.default.indexOf(message.content) + 1;
    message.delete().then(function (msg) {
      return console.log(msg.author + ' Event');
    }).catch(console.error);
    message.reply(_features2.default[theIndex]);
  }
});

// https://rainbowsix7nightbot.herokuapp.com/rainbowsix7.php?platform=uplay&nick=f0sterr.&command=rank


bot.login('Mjg2MTI1MjQ4OTc2MjU3MDI0.C5cQsA.dJ3tAoNGKMKXxTSeIQWh7RmGXtM');