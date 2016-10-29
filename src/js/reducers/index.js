import { combineReducers } from 'redux'
import chat from './chat'
import contacts from './contacts'

function account(state = {account: undefined}, action) {
  return state
}

const communicationApp = combineReducers({
  contacts,
  chat,
  account,
})

export default communicationApp