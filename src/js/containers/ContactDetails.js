import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ContactDetails extends React.Component {

    render() {
        const { selectedContact } = this.props;

        return (<div className="contact-details-panel">
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                <img alt="" src={ require('../../img/default-icon.png')}
                     width="35px" height="35px" style={{marginRight: '10px'}}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className="contact-status">online</div>
                    <div className="contact-name">{selectedContact.nickname}</div>
                </div>
            </div>

        </div>);
    }
}

const mapStateToProps = function(state) {
    return {
        selectedContact: state.contacts.selectedContact,
    }
}

export default connect(mapStateToProps)(ContactDetails);