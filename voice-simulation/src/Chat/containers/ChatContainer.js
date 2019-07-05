import React from 'react';
import  { chatStateFactory, messageFactory } from '../services/chatStateFactory';

class ChatContainer extends React.Component {

    state = chatStateFactory({
        messages: messageFactory({
            content: 'Hello'
        })
    });

    render() {
        return this.props.children({
            chatState: this.state
        })
    }
}

export default ChatContainer;