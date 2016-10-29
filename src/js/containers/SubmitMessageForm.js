import React from 'react'


export default class SubmitMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messageText: ""};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onMessageChange(ev){
        this.setState({messageText: ev.target.value});
    }

    onSubmit(ev) {
        ev.preventDefault();
        console.log(ev);
        console.log(this.state.messageText);
        if (!this.state.messageText.trim()) {
            return
        }

        this.props.onSubmit(this.state.messageText)
        this.setState({messageText: ""});
    }

    render() {
        return <div className="submit-message-panel">
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       value={this.state.messageText}
                       onChange={this.onMessageChange}/>
                <button type="submit">
                    Submit Message
                </button>
            </form>
        </div>;
    }
}

