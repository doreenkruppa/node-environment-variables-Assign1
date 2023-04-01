import dotenv from "dotenv";

dotenv.config();

console.log(`
"Hallo! Ich bin ${process.env.SERVER_NAME}! Ich habe ein ${process.env.SERVER_CPU}, und mein URL ist ${process.env.SERVER_URL}. Ich schreibe alles was passiert zu ${process.env.SERVER_LOG}"`);
