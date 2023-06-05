const TelegramBot = require('node-telegram-bot-api');

// Укажите токен вашего бота, который вы получили от BotFather
const token = '6023789905:AAFmQj6ihzhMgoZ3SbwO3p-qRaG_3e_LmjQ';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я бот. Как могу помочь?');
});

// Команда /help
bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Я могу помочь вам с различными командами. Доступные команды:\n/start - начать чат\n/help - показать список команд\n/time - показать текущее время\n/photo - отправить фото\n/weather - погода');
});

// Команда /time
bot.onText(/\/time/, (msg, match) => {
  const chatId = msg.chat.id;
  const currentTime = new Date().toLocaleTimeString();
  bot.sendMessage(chatId, `Текущее время: ${currentTime}`);
});

// Команда /photo
bot.onText(/\/photo/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, './Парк-Сказка-1280x960.jpg', { caption: 'Парк сказка' });
});

// Команда /smile
bot.onText(/\/smile/, (msg, match) => {
    const chatId = msg.chat.id;
    const smileEmoji = '😊'; // Смайлик
    bot.sendMessage(chatId, `Вот смайлик для вас: ${smileEmoji}`);
  });

// Команда /weather
bot.onText(/\/weather/, (msg, match) => {
  const chatId = msg.chat.id;
  // Ваш код для получения погоды
  // Отправка сообщения с погодой
});

// Команда /sayhello
bot.onText(/\/sayhello/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, как дела?');
});

// Команда /about
bot.onText(/\/about/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Этот бот создан для оказания различной помощи и предоставления информации.');
});

// Команда /joke
bot.onText(/\/joke/, (msg, match) => {
  const chatId = msg.chat.id;
  // Ваш код для получения случайной шутки
  // Отправка сообщения со шуткой
});

// Команда /news
bot.onText(/\/news/, (msg, match) => {
  const chatId = msg.chat.id;
  // Ваш код для получения последних новостей
  // Отправка сообщения с новостями
});

// Команда /stop
bot.onText(/\/stop/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Остановка бота...');
  // Ваш код для остановки бота или сохранения состояния
});

bot.comm

// Запускаем бота
bot.on('polling_error', (error) => {
  console.log(error);
});
