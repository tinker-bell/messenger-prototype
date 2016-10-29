import {SET_CHAT, NEW_MESSAGE} from '../actions/constants'

export default function chat(state = {chat: []}, action){
    switch (action.type) {
        case SET_CHAT:
          return {... state, chat: action.payload};
        case NEW_MESSAGE:
            console.log(action);
            var newState = state.chat.slice();
            newState.push(action.payload);
            return {chat: newState}
        default:
            return state
    }
}

