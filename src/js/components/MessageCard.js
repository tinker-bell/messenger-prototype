import React from 'react';

class MessageCard extends React.Component{

    render() {
        const {from, message, datetime} = this.props.message;
        var date = new Date(Date.parse(datetime));
        var timeString = date.getHours() + ":" + date.getMinutes();
        const isMyMessage = from === this.props.account.id;
        // TODO: think of smth better then <table>
        return <table style={{width: "100%", marginTop: "6px", marginBottom: "6px"}}>
        <tbody>
        <tr>
            <td width="50px">
                {this.getIcon(isMyMessage)}
            </td>
            <td>
                {isMyMessage ? this.getMyMessageBubble(message) : this.getFromMessageBubble(message)}
            </td>
            <td className="message-time" style={{textAlign: "right", width: "50px"}}>{timeString}</td>
        </tr>
        </tbody>
        </table>;
    }

    getMyMessageBubble(message) {
        return <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginLeft: "30px"
        }}>
            <div className="bubble my-message">{message}</div>
            <div className="bubble-pointer-right"></div>
        </div>
    }

    getFromMessageBubble(message) {
        return <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginRight: '8px'
        }}>
            <div className="bubble-pointer-left"></div>
            <div className="bubble from-message">{message}</div>
        </div>
    }

    getIcon(isMyMessage) {
        return !isMyMessage ? <img alt="" src={ require('../../img/default-icon.png')}
                                   width="35px" height="35px" style={{marginRight: '5px', marginLeft: '10px'}}/> : null;
    }
}


export default MessageCard;