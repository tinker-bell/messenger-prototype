import React from 'react';
import { connect } from 'react-redux'
import ChatPanel from '../containers/ChatPanel'
import ContactsList from '../containers/ContactsList'
import AccountDetails from '../containers/AccountDetails'


class App extends React.Component{

    render() {
        const { selectedContact } = this.props;
        return <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', minHeight: '100%'}}>
            <div className="sidebar">
            <AccountDetails />
            <ContactsList messenger={this.props.messenger} />
            </div>
            { !!selectedContact ? <ChatPanel messagesWS={this.props.messagesWS}  /> : null }
        </div>;
    }
}

const mapStateToProps = function(state) {
    return {
        selectedContact: state.contacts.selectedContact,
    }
}

export default connect(mapStateToProps)(App);

