import React from 'react';
import { connect } from 'react-redux'
import MessagesPanel from './MessagesPanel'
import ContactDetails from './ContactDetails'
import SubmitMessageForm from '../components/SubmitMessageForm'
import { newMessage } from '../actions'


class ChatPanel extends React.Component{

    render() {
        return <div>
            <ContactDetails/>
            <MessagesPanel />
            <SubmitMessageForm onSubmit={this.onSubmit.bind(this)}/>
        </div>;
    }

    onSubmit(text){
        const d = new Date(Date.now());
        const message ={
            from: this.props.account.id,
            to: this.props.selectedContact.id,
            is_read: false,
            message: text,
            datetime: d.toISOString()
        };

        this.props.messagesWS.send(message.from, message.to, message.message);
        this.props.dispatch(newMessage(message));
    }
}

const mapStateToProps = function(state) {
    return {
        selectedContact: state.contacts.selectedContact,
        account: state.account,
    }
}

export default connect(mapStateToProps)(ChatPanel);