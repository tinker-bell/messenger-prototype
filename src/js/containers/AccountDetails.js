import React from 'react';
import { connect } from 'react-redux'

class AccountDetails extends React.Component {

    render() {
        const {nickname} = this.props.account;
        return <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
            alignItems: 'center', marginTop: '10px', marginLeft: '20px'}}>
            <img alt="" src={ require('../../img/charge-icon.png')}
                 width="35px" height="35px" style={{marginRight: '10px'}}/>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap'}}>
                <div className="nickname">{nickname}</div>
                <div className="location">Saint-Petersburg</div>
            </div>
        </div>
    }
}

const mapStateToProps = function(state) {
    return {
        account: state.account,
    }
}

export default connect(mapStateToProps)(AccountDetails);