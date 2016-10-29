
export class ServerFacade {
    constructor(accountId){
        this.account = accountId;
    }

    getContacts(callback) {
        $.ajax({
            method: "GET",
            url: "/api/account/" + this.account + "/contacts",
        }).done(function (msg) {
            callback(JSON.parse(msg));
        });
    }

    getChat(accountWith, callback) {
        $.ajax({
            method: "GET",
            url: "/api/chat/" + this.account + "/" + accountWith,
        }).done(function (msg) {
            callback(JSON.parse(msg)['messages']);
        });
    }
};
