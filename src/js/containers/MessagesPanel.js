import React from 'react';
import { connect } from 'react-redux'
import MessageCard from '../components/MessageCard'
import { newMessage } from '../actions'
import Delimiter from '../components/Delimiter'
import * as utils from '../utils'

class MessagesPanel extends React.Component {

    componentDidUpdate(){
        this.panel.scrollTop = this.panel.scrollHeight;
    }

    render() {
        const {chat, account} = this.props;
        var items = []
        var key = 0;
        var prevDate = new Date(1900, 1, 1);
        var today = new Date(Date.now());

        for (var i = 0; i < chat.length; i++) {
            var message = chat[i];
            var date = utils.getDateOnly(new Date(Date.parse(message.datetime)));
            if (date > prevDate) {
                items.push(<Delimiter key={key++} text={this.getDateString(date, today)}/>);
            }
            prevDate = date;
            items.push(<MessageCard message={message} key={key++} account={account}/>);
        }

        return <div className="messages-panel" ref={(node) => this.panel = node} >
            { items }
        </div>;
    }

    getDateString(date, today) {
        return utils.isEqualDates(date, today) ? "Today" : utils.toDateString(date)
    }
}

const mapStateToProps = function(state) {
    return {
        chat: state.chat.chat,
        account: state.account,
    }
}

export default connect(mapStateToProps)(MessagesPanel);