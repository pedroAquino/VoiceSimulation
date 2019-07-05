import React from 'react';
import  { buildInitialState } from '../services/chatStateFactory';
import { messageFactory, getNextMessage } from '../services/messageFactory';

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleNextMessage = this.handleNextMessage.bind(this);
    }

    state = buildInitialState();

    componentDidUpdate(prevProps, prevState) {
        if (this.state.messages.length > prevState.messages.length &&
            this.state.currentMessage.id === prevState.currentMessage.id
            ) {
                this.handleNextMessage();
        }
    }

    handleAddMessage(content, from='USER') {
        this.setState({
            messages: [
                ...this.state.messages,
                messageFactory({
                    content,
                    id: Date.now(),
                    from
                })
            ]
        });
    }

    handleNextMessage() {
        const nextMessage = getNextMessage(this.state);
        this.setState({
            currentMessage: nextMessage,
            messages: [
                ...this.state.messages,
                nextMessage
            ]
        })
    }

    render() {
        return this.props.children({
            chatState: this.state,
            addMessage: this.handleAddMessage
        })
    }
}

export default ChatContainer;