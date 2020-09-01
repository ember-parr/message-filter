export const Message = messageObject => {
    return `
        <section class="message">${messageObject.friend}: ${messageObject.text}</section>
    `
}

