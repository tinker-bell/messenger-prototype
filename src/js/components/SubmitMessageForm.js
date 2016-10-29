import React from 'react'


export default class SubmitMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messageText: ""};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <div className="submit-message-panel">
            <form onSubmit={this.onSubmit}>
                <div style={{display: "flex", flexDirection: 'row', width: '100%'}}>
                    {/*<div>*/}
                        {/*<button type="submit">*/}
                            {/*Submit Message*/}
                        {/*</button>*/}
                    {/*</div>*/}
                    <textarea type="text" placeholder="Enter your text here..."
                              value={this.state.messageText}  maxLength={2000} rows={3}
                              onChange={this.onMessageChange} onKeyPress={this.onKeyPress.bind(this)} style={textAreaStyle}/>
                </div>
            </form>
        </div>;
    }

    onKeyPress(ev) {
        if (ev.key === "Enter") {
            ev.preventDefault();
            this.onSubmit(ev);
            return false;
        }
    }

    onMessageChange(ev) {
        this.setState({messageText: ev.target.value});
    }

    onSubmit(ev) {
        ev.preventDefault();
        if (!this.state.messageText.trim()) {
            return
        }

        this.props.onSubmit(this.state.messageText)
        this.setState({messageText: ""});
    }
}

const textAreaStyle={
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '20px',
    border: 'none',
    width: '100%',
    resize: 'none',
}


