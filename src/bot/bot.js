import TelegramBot from 'node-telegram-bot-api';
import fetch from "node-fetch";

const token = '5959486178:AAFfhtMCt9RCGcxy_PCCJcD6hcMasXGbjsA';
const bot = new TelegramBot(token, { polling: true });
const botGetUrl = `https://api.telegram.org/bot${token}/getMe`;
const botSendMessage = `https://api.telegram.org/bot${token}/sendMessage`;

let users = [];
let userId;


//отвечает тоже самое
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     const chatId = msg.chat.id
//     const resp = match[1]
//     bot.sendMessage(chatId, resp)
// })

//регает ID пользователя
bot.onText(/\/register (.+)/, (msg, match) => {
    const chatId = msg.chat.id
    users.push(chatId)
    userId = chatId;
    console.log('user registered')
    bot.sendMessage(chatId, 'Done.')
})

//отвечает только на 'dog'
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text === 'dog') {
        bot.sendMessage(chatId, "You sent 'dog'")
    }
})

console.log('bot is up');

const checkBotConnection = () => {
    fetch(botGetUrl)
        .then((response) => {
            console.log('resp:', response);
        })
        .catch((error) => {
            console.log('error:', error)
        });
}

 export const sendBotMessage = () => {
    fetch(botSendMessage, {
        chat_id: userId,
        text: 'Дарова'
    })
        .then((response) => {
            console.log('resp:', response);
        })
        .catch((error) => {
            console.log('error:', error)
        });
}





checkBotConnection();



