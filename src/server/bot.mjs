import TelegramBot from 'node-telegram-bot-api';
import {TOKEN} from "../settings/constants.ts";

const bot = new TelegramBot(TOKEN, { polling: true });

export let userId=0;

//регает ID пользователя
bot.onText(/\/register/, (msg, match) => {
    userId = msg.chat.id;
    console.log('user registered')
    bot.sendMessage(userId, 'Your chatID registered.')
})

console.log('bot is up');



