import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8174802456:AAE5QllvRPv7J_IlNR-VEPcKwKJ11dS7UMw"
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, "salom xush kelibsiz")
})

console.log("bot ishga tushdi ...");
