# TODO list с телеграмм ботом

Тестовое задание для компании Mind Bots.
Представляет из сеяб простой TODO лист с прикрученным телеграм ботом. Бот оповещает уведомлениями о добавлении, удалении, выполнении задач.

## Запуск приложения
Есть хостинг: https://mind-todo-tg-bot.vercel.app
для запуска приложения локально: 
  npm install
  npm start

## телеграмм бот
Чтобы приложение работало с ботом, он должен быть запущен отдельно.
телеграм-бот:
  гитхаб: https://github.com/Eprst-p/mini-server-tg-bot
    локально запускается: npm install, затем npm start
  имя бота: @very_usefu11_bot
  далее нужно зайти в телаграмме в чат с ботом и написать: /register 
  будет записан ваш chatId, чтобы присылать сообщения. Возможен только один chatId. Базы данных нет, поэтому после отключения бека нужно будет заново писать /register
