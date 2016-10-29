
export default class MessagesWebSocket{
    constructor(messenger){
        this.messenger = messenger;
    }

    connect(url, accountId){
        this.accountId = accountId;
        this.socket = new WebSocket(url);
        this.socket.onopen = () => this.handshake(accountId);
        this.socket.onmessage = this.onMessage.bind(this);
    }

    handshake(accountId) {
        this.__send({
            type: "handshake",
            attributes: {account: accountId}
        });
    }

    send(accountFromId, accountToId, message) {
        this.__send({
            type: "new_message",
            attributes: {
                from: accountFromId,
                to: accountToId,
                message: message
            }
        });
    }

    __send(data) {
        this.socket.send(JSON.stringify({data: data}));
    }

    onMessage(ev) {
        console.log("onMessage");
        console.log(ev.data);
        const data = JSON.parse(ev.data);
        console.log("JSON parse");
        console.log(data)
        switch (data.type) {
            case "new_message":
                this.onNewMessage(data);
                break;
        }
    }

    onNewMessage(data) {
        const message = {
            from: data.attributes.from,
            to: data.attributes.to,
            is_read: data.attributes.is_read,
            message: data.attributes.message,
            datetime: data.attributes.datetime
        };
        this.messenger.onNewMessage(message);
    }
}
