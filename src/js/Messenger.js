import { newMessage, setContactsList, setSelectedContact, setChat } from './actions'

export default class Messenger {
    constructor(account, store, serverFacade) {
        this.account = account;
        this.store = store;
        this.serverFacade = serverFacade
    }

    onNewMessage(message) {
        var state = this.store.getState();
        if (!!state.contacts.selectedContact && state.contacts.selectedContact.id === message.from) {
            this.store.dispatch(newMessage(message));
        }
        else {
            this.reloadContacts();
        }
    }

    onContactSelect(contact){
        this.store.dispatch(setSelectedContact(contact));
        this.serverFacade.getChat(contact.id, data => {
            this.store.dispatch(setChat(data));
            this.reloadContacts();
        });
    }

    reloadContacts() {
        var dispatch = function (data) {
            this.store.dispatch(setContactsList(data['contacts']));
        };
        this.serverFacade.getContacts(dispatch.bind(this));
    }
}