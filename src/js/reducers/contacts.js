import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT} from '../actions/constants'

export default function contacts(state = {contacts: [], selectedContact: null}, action) {
    switch (action.type) {
        case SET_CONTACTS_LIST:
            return {... state, contacts: action.payload}
        case SET_SELECTED_CONTACT:
            return {... state, selectedContact: action.payload}
        default:
            return state
    }
}