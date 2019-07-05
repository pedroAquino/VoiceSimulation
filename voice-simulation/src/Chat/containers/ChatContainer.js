import React from 'react';
import  { buildInitialState } from '../services/chatStateFactory';

class ChatContainer extends React.Component {

    state = buildInitialState();

    render() {
        return this.props.children({
            chatState: this.state
        })
    }
}

export default ChatContainer;