import TelegramBot from 'node-telegram-bot-api';

const token = '5959486178:AAFfhtMCt9RCGcxy_PCCJcD6hcMasXGbjsA';
const bot = new TelegramBot(token, { polling: true })
let users = []

//отвечает тоже самое
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     const chatId = msg.chat.id
//     const resp = match[1]
//     bot.sendMessage(chatId, resp)
// })

//регает ID пользователя
bot.onText(/\/register/, (msg, match) => {
    const chatId = msg.chat.id
    users.push(chatId)
    console.log('user registered')
    bot.sendMessage(chatId, 'Done.')
})

//отвечает только на 'dog'
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text == 'dog') {
        bot.sendMessage(chatId, "You sent 'dog'")
    }
})


