import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import communicationApp from './reducers'
import MessagesWebSocket from './MessagesWebSocket'
import { ServerFacade } from './ServerFacade'
import {setContactsList} from './actions'
import Messenger from './Messenger'


// take active account from page global scope const activeAccount
// TODO: think of smth better
const account = activeAccount;
const store = createStore(communicationApp, {account: account});

const serverFacade = new ServerFacade(account.id);
const messenger = new Messenger(account.id, store, serverFacade);
messenger.reloadContacts();

const messagesWS = new MessagesWebSocket(messenger);
messagesWS.connect("ws://localhost:8888/messages", account.id);


render(
  <Provider store={store}>
    <App messagesWS={messagesWS} serverFacade={serverFacade} />
  </Provider>,
  document.getElementById('root')
)