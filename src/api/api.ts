import {BotMessage} from "../settings/bot-message";
import TOKEN from "../settings/constants.mjs";

const botGetUrl = `https://api.telegram.org/bot${TOKEN}/getMe`;


export const getUserId = async () => {
    const response = await fetch('/user-id');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const checkBotConnection = () => {
    fetch(botGetUrl)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

export const sendBotMessage = async (botMessage:BotMessage, taskName:string) => {
    try {
        const message = `задача ${taskName} ${botMessage}`
        const data = await getUserId();
        const botSendMessage = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${data.userID}&text=${message}`;
        fetch(botSendMessage)
            .then((res) => console.log(res))
    } catch (error) {
        console.log(error)
    }
}
