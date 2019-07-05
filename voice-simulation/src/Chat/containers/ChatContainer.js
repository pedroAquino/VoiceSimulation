import React from 'react';
import  { buildInitialState } from '../services/chatStateFactory';
import { messageFactory } from '../services/messageFactory';

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
    }

    state = buildInitialState();

    handleAddMessage(content) {
        this.setState({
            messages: [
                ...this.state.messages,
                messageFactory({
                    content,
                    id: Date.now(),
                    isVisible: true
                })
            ]
        });
    }

    render() {
        return this.props.children({
            chatState: this.state,
            addMessage: this.handleAddMessage
        })
    }
}

export default ChatContainer;