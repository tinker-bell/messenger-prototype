import React from 'react';
import { connect } from 'react-redux'
import MessageCard from '../components/MessageCard'
import { newMessage } from '../actions'

class MessagesPanel extends React.Component {

    render() {
        const {chat, account} = this.props;
        var key = 1;
        return <div className="messages-panel">
            { chat.map(m => <MessageCard message={m} key={key++} account={account}/>) }
                </div>;
    }
}

const mapStateToProps = function(state) {
    return {
        chat: state.chat.chat,
        account: state.account,
    }
}

export default connect(mapStateToProps)(MessagesPanel);