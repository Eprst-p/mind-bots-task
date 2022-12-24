import TelegramBot from 'node-telegram-bot-api';
import TOKEN from "../settings/constants.mjs";

const bot = new TelegramBot(TOKEN, { polling: true });

export let userId=0;

//регает ID пользователя
bot.onText(/\/register/, (msg, match) => {
    userId = msg.chat.id;
    console.log('user registered')
    bot.sendMessage(userId, 'Done.')
})

//отвечает только на 'dog'
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text === 'dog') {
        bot.sendMessage(chatId, "You sent 'dog'")
    }
})

console.log('bot is up');



