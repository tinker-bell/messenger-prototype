import { newMessage, setContactsList } from './actions'

export default class Messenger {
    constructor(account, store, serverFacade) {
        this.account = account;
        this.store = store;
        this.serverFacade = serverFacade
    }

    onNewMessage(message) {
        var state = this.store.getState();
        console.log(state.contacts.selectedContact );
        console.log(message.from)
        if (state.contacts.selectedContact.id === message.from) {
            console.log("dispatch")
            console.log("message")
            this.store.dispatch(newMessage(message));
        }
        else {
            console.log("reload contacts")
            this.reloadContacts();
        }
    }

    reloadContacts() {
        var dispatch = function (data) {
            this.store.dispatch(setContactsList(data['contacts']));
        };
        this.serverFacade.getContacts(dispatch.bind(this));
    }
}