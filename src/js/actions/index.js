import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT, SET_CHAT, NEW_MESSAGE} from './constants'

export const setContactsList = (contacts) => ({
        type: SET_CONTACTS_LIST,
        payload: contacts
    })

export const setSelectedContact = (contact) => ({
        type: SET_SELECTED_CONTACT ,
        payload: contact
    })

export const setChat = (messages) => ({
        type: SET_CHAT,
        payload: messages
    })

export const newMessage = (message) => ({
        type: NEW_MESSAGE,
        payload: message
    })


