import {BotMessageStatus} from "../settings/bot-message-status";

export const sendMessageToServer = async (messageStatus:BotMessageStatus, taskName:string) => {
    const sendData = {
        messageStatus: messageStatus,
        taskName: taskName
    }
    const response = await fetch(`/message`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
};
