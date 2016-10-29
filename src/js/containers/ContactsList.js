import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ContactItem } from '../components/ContactItem'
import { setSelectedContact, setChat } from '../actions'

class ContactsList extends React.Component {

    render() {
        const {contacts, selectedContact} = this.props;
        var getItem = function(x) {
            return <ContactItem contact={x}
                                key={x.id}
                                onSelected={this.onSelectContact.bind(this)}
                                isSelected={!!selectedContact && selectedContact.id === x.id}/>
        }

        return (<div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="sidebar-header">messages</div>
            { contacts.map(getItem.bind(this)) }
        </div>);
    }

    onSelectContact(contact){
        const {dispatch, serverFacade} = this.props;
        dispatch(setSelectedContact(contact));
        serverFacade.getChat(contact.id, data => {
            dispatch(setChat(data));});
    }
}

const mapStateToProps = function(state) {
        return {
            contacts: state.contacts.contacts,
            selectedContact: state.contacts.selectedContact,
        }
    }

export default connect(mapStateToProps)(ContactsList);