import React from 'react';

export default class Delimiter extends React.Component {

    render() {
        return <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
            <div style={delimiterStyles}></div>
            <div style={{margin: '0 15px', whiteSpace: 'nowrap'}} className="alt-text">{this.props.text}</div>
            <div style={delimiterStyles}></div>
        </div>;
    }
}

const delimiterStyles = {
    width: '100%',
    height: '1px',
    borderTopStyle: 'solid',
    borderTopColor: "#EEEEEE",
    flexGrow: 2,
    borderTopWidth: '1px',

};
