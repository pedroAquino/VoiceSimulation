import React from 'react';
import  { buildInitialState } from '../services/chatStateFactory';
import { messageFactory, getNextMessage } from '../services/messageFactory';
import { getLast } from '../../shared/helpers/arrayHelper';
import { simulationFactory, simulationResponseFactory } from '../services/simulationFactory';
import simulationApi from '../services/simulationApi';

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleNextMessage = this.handleNextMessage.bind(this);
    }

    state = buildInitialState();

    componentDidUpdate(prevProps, prevState) {
         if (this.state.messages.length > prevState.messages.length) {
             this.handleFocus();
         }
        
        if (this.state.messages.length > prevState.messages.length &&
            this.state.currentMessage.id === prevState.currentMessage.id
            ) {
                this.handleNextMessage();
        }

        if (getLast(this.state.messages).id === 'vehicle_doing_simulation') {
            this.handleSimulation();
        }
    }

    componentDidMount() {
        this.handleFocus();
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

    handleSimulation() {
        const simulation = simulationFactory()
            .fromMessages(this.state.messages)
            .toApi();
        simulationApi
            .postSimulation(simulation)
            .then(result => {
                debugger;
                const simulationResponse = simulationResponseFactory()
                    .fromApiResponse(result.data.data);
                this.setState({
                    currentMessage: { id: 'last_message' },
                    messages: [
                        ...this.state.messages,
                        messageFactory({
                            content: simulationResponse.toString(),
                            id: Date.now(),
                            from: 'DT'
                        })
                    ]
                });
            });
    }

    handleFocus() {
        const lastMessageRef = getLast(this.state.messages).ref;
        lastMessageRef.current.focus();
    }

    render() {
        return this.props.children({
            chatState: this.state,
            addMessage: this.handleAddMessage
        })
    }
}

export default ChatContainer;