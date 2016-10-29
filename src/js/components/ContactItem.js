import React from 'react';


export class ContactItem extends React.Component{
    render() {
        var css = "contact-item clickable"
        if (this.props.isSelected){
            css += " contact-item-selected"
        }

        return <div className={css} onClick={this.onClick.bind(this)} >
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
                <div className={this.props.contact.online ? 'online' : 'offline'}></div>
            {this.getContactName()}
            </div>
            { this.getUnreadCount()}
        </div>;
    }

    onClick(ev){
        ev.preventDefault();
        this.props.onSelected(this.props.contact);
    }

    getContactName(){
        return <div className="nickname">{this.props.contact.nickname}</div>
    }

    getUnreadCount(){
        const unread = this.props.contact.unread_messages;
        return !!unread ? <div className="unread-count">{unread}</div> : null;
    }
}
