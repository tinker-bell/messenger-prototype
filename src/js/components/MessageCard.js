import React from 'react';
import * as utils from '../utils'

class MessageCard extends React.Component{

    render() {
        const {from, message, datetime} = this.props.message;
        var date = new Date(Date.parse(datetime));
        const isMyMessage = from === this.props.account.id;

        return <div style={{width: "100%", margin: "15px 0",
            display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center'}}>
            <div style={{width: "50px"}}>
                {this.getIcon(isMyMessage)}
            </div>
            <div style={{flexGrow: 2}}>
                {isMyMessage ? this.getMyMessageBubble(message) : this.getFromMessageBubble(message)}
            </div>
            <div className="alt-text" style={{textAlign: "right", width: "60px", whiteSpace: 'nowrap'}}>
                {utils.toTimeString(date)}
            </div>
        </div>;
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